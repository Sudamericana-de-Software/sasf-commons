import { configureStore } from '@reduxjs/toolkit';
import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { Provider, useDispatch, useSelector } from 'react-redux';
import { Navigate, Route, Routes, useNavigate, useSearchParams } from 'react-router-dom';
import { Button } from '~/form/fields';
import PrivateRoute from '~/guard/PrivateRouting';

type Role = 'ADMIN' | 'USER' | 'MANTAINER';

type AuthState = { isAuthenticated: boolean; roles?: Role[] };
type RootState = { auth: AuthState };

// --- Store demo con acciones login/logout ---
const makeStore = (initialAuth: { isAuthenticated: boolean; roles?: Role[] }) => {
  const authReducer = (state = initialAuth, action: { type: string; payload?: { roles?: Role[] } }) => {
    switch (action.type) {
      case 'auth/login':
        return { isAuthenticated: true, roles: action.payload?.roles ?? [] };
      case 'auth/logout':
        return { isAuthenticated: false, roles: [] };
      default:
        return state;
    }
  };

  return configureStore({
    reducer: { auth: authReducer },
    preloadedState: { auth: initialAuth },
  });
};

const WithAuthState: React.FC<{
  auth: { isAuthenticated: boolean; roles?: Role[] };
  children: React.ReactNode;
}> = ({ auth, children }) => {
  const store = React.useMemo(() => makeStore(auth), [auth]);
  return <Provider store={store}>{children}</Provider>;
};

// ----- Componentes demo -----
const LoginDemo: React.FC<{ rolesOnLogin?: Role[] }> = ({ rolesOnLogin = ['USER'] }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [params] = useSearchParams();
  const redirectUrl = params.get('redirectUrl') ?? '/';

  return (
    <div className="p-6 space-y-3 text-[var(--font)]">
      <h2 className="text-xl font-bold">Login (demo)</h2>
      <p>
        redirectUrl: <code>{redirectUrl}</code>
      </p>
      <Button
        type="button"
        onClick={() => {
          dispatch({ type: 'auth/login', payload: { roles: rolesOnLogin } });
          navigate(redirectUrl, { replace: true });
        }}
      >
        Iniciar sesión (roles: {rolesOnLogin.join(', ')})
      </Button>
    </div>
  );
};

const ProtectedBox: React.FC = () => {
  const auth = useSelector((s: RootState) => s.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  return (
    <div className="p-6 space-y-3 text-[var(--font)]">
      <h2 className="text-xl font-bold">Contenido protegido</h2>
      <p>Auth: {JSON.stringify(auth)}</p>
      <Button
        type="button"
        variant="outline"
        onClick={() => {
          dispatch({ type: 'auth/logout' });
          navigate('/auth/login', { replace: true });
        }}
        children="Cerrar sesión"
      />
    </div>
  );
};

const UnauthorizedDemo: React.FC = () => {
  const navigate = useNavigate();
  return (
    <div className="p-8 space-y-4 text-[var(--font)]">
      <div>Unauthorized (demo)</div>
      <Button type="button" variant="danger" onClick={() => navigate('/auth/login?redirectUrl=/privado', { replace: true })} children="Volver al login" />
    </div>
  );
};

const meta: Meta<typeof PrivateRoute> = {
  title: 'guards/PrivateRoute',
  component: PrivateRoute,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
    controls: { disable: true },
    docs: {
      source: { excludeDecorators: true },
      description: {
        component: `
        ### ¿Qué hace?
        Protege rutas:
        - Si **no** estás autenticado → \`/auth/login?redirectUrl=<ruta-actual>\`
        - Si falta el **rol** requerido → \`/unauthorized\`
        - Si cumple → renderiza \`children\`

        ### Requisitos
        1) **Redux** con \`state.auth = { isAuthenticated: boolean, roles?: Role[] }\`  
        2) **Router** montado arriba  
        3) Rutas \`/auth/login\` y \`/unauthorized\`  
        4) El login debe respetar \`redirectUrl\`

        ### Uso mínimo
        \`\`\`tsx
        <Routes>
          <Route path="/auth/login" element={<LoginPage />} />
          <Route path="/unauthorized" element={<UnauthorizedScreen />} />

          <Route
            path="/admin"
            element={
              <PrivateRoute requiredRole="ADMIN">
                <AdminDashboard />
              </PrivateRoute>
            }
          />
        </Routes>
        \`\`\`
        `.trim(),
      },
    },
  },
  argTypes: {
    requiredRole: {
      description: 'Rol requerido para acceder. Se puede cambiar segun la lógica de negocio.',
      table: { category: 'Props', type: { summary: `'ADMIN' | 'USER' | 'MANTAINER'` } },
      control: { type: 'radio' },
      options: ['ADMIN', 'USER', 'MANTAINER'],
    },
    children: {
      description: 'Contenido protegido.',
      table: { category: 'Props', type: { summary: 'JSX.Element' } },
      control: { disable: true },
    },
  },
};
export default meta;

type Story = StoryObj<typeof meta>;

export const NoAutenticado: Story = {
  render: (args) => (
    <WithAuthState auth={{ isAuthenticated: false }}>
      <Routes>
        <Route path="/auth/login" element={<LoginDemo rolesOnLogin={['USER']} />} />
        <Route path="/unauthorized" element={<UnauthorizedDemo />} />
        <Route
          path="/privado"
          element={
            <PrivateRoute {...args}>
              <ProtectedBox />
            </PrivateRoute>
          }
        />
        <Route path="*" element={<Navigate to="/privado" replace />} />
      </Routes>
    </WithAuthState>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Empieza no autenticado → login con redirect a `/privado`.',
      },
      source: {
        code: `<PrivateRoute>\n  <ProtectedBox />\n</PrivateRoute>`,
      },
    },
  },
};

export const SinRolRequerido: Story = {
  render: (args) => (
    <WithAuthState auth={{ isAuthenticated: false }}>
      <Routes>
        <Route path="/auth/login" element={<LoginDemo rolesOnLogin={['USER']} />} />
        <Route path="/unauthorized" element={<UnauthorizedDemo />} />
        <Route
          path="/privado"
          element={
            <PrivateRoute {...args} requiredRole="ADMIN">
              <ProtectedBox />
            </PrivateRoute>
          }
        />
        <Route path="*" element={<Navigate to="/privado" replace />} />
      </Routes>
    </WithAuthState>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Login como `USER` → no alcanza el rol `ADMIN` → Unauthorized con botón para volver al login.',
      },
      source: {
        code: `<PrivateRoute requiredRole="ADMIN">\n  <ProtectedBox />\n</PrivateRoute>`,
      },
    },
  },
};

export const ConAcceso: Story = {
  render: (args) => (
    <WithAuthState auth={{ isAuthenticated: false }}>
      <Routes>
        <Route path="/auth/login" element={<LoginDemo rolesOnLogin={['ADMIN']} />} />
        <Route path="/unauthorized" element={<UnauthorizedDemo />} />
        <Route
          path="/privado"
          element={
            <PrivateRoute {...args} requiredRole="ADMIN">
              <ProtectedBox />
            </PrivateRoute>
          }
        />
        <Route path="*" element={<Navigate to="/privado" replace />} />
      </Routes>
    </WithAuthState>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Login como `ADMIN` → acceso correcto.',
      },
      source: {
        code: `<PrivateRoute requiredRole="ADMIN">\n  <ProtectedBox />\n</PrivateRoute>`,
      },
    },
  },
};
