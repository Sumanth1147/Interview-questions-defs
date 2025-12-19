// # Custom Hooks in React - Real-Time Applications

// ## What are Custom Hooks?

// Custom hooks are **reusable JavaScript functions** that start with `use` and can call other React hooks. They let you extract component logic into reusable functions, promoting DRY (Don't Repeat Yourself) principles.

// ---

// ## When to Use Custom Hooks?

// ✅ **Extracting repetitive logic** across multiple components  
// ✅ **Sharing stateful logic** without prop drilling  
// ✅ **Organizing complex component logic**  
// ✅ **Abstracting side effects** (API calls, subscriptions, timers)

// ---

// ## Real-Time Examples

// ### 1. **useLocalStorage** - Persist State in Browser

// ````javascript
import { useState, useEffect } from 'react';

function useLocalStorage(key, initialValue) {
  const [value, setValue] = useState(() => {
    const storedValue = localStorage.getItem(key);
    return storedValue ? JSON.parse(storedValue) : initialValue;
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue];
}

// Usage in component
function ThemeToggle() {
  const [theme, setTheme] = useLocalStorage('theme', 'light');
  
  return (
    <button onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>
      Current Theme: {theme}
    </button>
  );
}
````

// **Real-world use**: Shopping cart persistence, user preferences, auth tokens

// ---

// ### 2. **useFetch** - API Data Fetching

// ````javascript
import { useState, useEffect } from 'react';

function useFetch(url) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await fetch(url);
        const json = await response.json();
        setData(json);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [url]);

  return { data, loading, error };
}

export default useFetch;

// Usage
export default function UserList() {
  const { data, loading, error } = useFetch('/api/users');

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <ul>
      {data.map(user => <li key={user.id}>{user.name}</li>)}
    </ul>
  );
}
````

// **Real-world use**: Dashboard data, user profiles, product listings

// ---

// ### 3. **useDebounce** - Optimize Search/Input Performance

// ````javascript
// import { useState, useEffect } from 'react';

function useDebounce(value, delay = 500) {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => clearTimeout(timer);
  }, [value, delay]);

  return debouncedValue;
}

// Usage
function SearchBar() {
  const [searchTerm, setSearchTerm] = useState('');
  const debouncedSearch = useDebounce(searchTerm, 500);

  useEffect(() => {
    if (debouncedSearch) {
      // API call only after user stops typing for 500ms
      fetch(`/api/search?q=${debouncedSearch}`)
        .then(res => res.json())
        .then(data => console.log(data));
    }
  }, [debouncedSearch]);

  return (
    <input
      value={searchTerm}
      onChange={(e) => setSearchTerm(e.target.value)}
      placeholder="Search..."
    />
  );
}
// ````

// **Real-world use**: Search autocomplete, form validation, API rate limiting

// ---

// ### 4. **useAuth** - Authentication Logic

// ````javascript
import { useState, useEffect } from 'react';

function useAuth() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem('authToken');
    if (token) {
      fetch('/api/verify-token', {
        headers: { Authorization: `Bearer ${token}` }
      })
        .then(res => res.json())
        .then(userData => setUser(userData))
        .catch(() => setUser(null))
        .finally(() => setLoading(false));
    } else {
      setLoading(false);
    }
  }, []);

  const login = async (credentials) => {
    const response = await fetch('/api/login', {
      method: 'POST',
      body: JSON.stringify(credentials)
    });
    const data = await response.json();
    localStorage.setItem('authToken', data.token);
    setUser(data.user);
  };

  const logout = () => {
    localStorage.removeItem('authToken');
    setUser(null);
  };

  return { user, loading, login, logout };
}

// Usage
function Dashboard() {
  const { user, loading, logout } = useAuth();

  if (loading) return <div>Loading...</div>;
  if (!user) return <div>Please login</div>;

  return (
    <div>
      Welcome, {user.name}!
      <button onClick={logout}>Logout</button>
    </div>
  );
}
````

// **Real-world use**: Protected routes, user sessions, role-based access control

// ---

// ### 5. **useWindowSize** - Responsive Design

// ````javascript
import { useState, useEffect } from 'react';

function useWindowSize() {
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight
  });

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight
      });
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return windowSize;
}

// Usage
function ResponsiveComponent() {
  const { width } = useWindowSize();

  return (
    <div>
      {width < 768 ? <MobileView /> : <DesktopView />}
    </div>
  );
}
// ````

// **Real-world use**: Responsive navigation, adaptive layouts, mobile detection

// ---

// ## Benefits of Custom Hooks

// | Benefit | Description |
// |---------|-------------|
// | **Reusability** | Share logic across multiple components |
// | **Readability** | Clean, organized code with clear intent |
// | **Modularity** | Separate concerns, easier to maintain |
// | **Testability** | Test hooks independently from components |
// | **Composition** | Combine multiple hooks for complex logic |
// | **State Management** | Encapsulate stateful logic without prop drilling |

// ## Interview Tips

// ✅ Custom hooks **must start with "use"** (React convention)  
// ✅ Can call other hooks inside (useState, useEffect, etc.)  
// ✅ Extract logic that's **repeated in 2+ components**  
// ✅ Return values (state, functions) that components need  
// ✅ Follow **Rules of Hooks** (only call at top level, only in React functions)