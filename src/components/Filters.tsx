interface Props {
  filter: 'all' | 'pending' | 'done';
  setFilter: (f: 'all' | 'pending' | 'done') => void;
  search: string;
  setSearch: (s: string) => void;
}

export const Filters = ({ filter, setFilter, search, setSearch }: Props) => (
  <div className="filters">
    <button className={filter === 'all' ? 'active' : ''} 
      onClick={() => setFilter('all')}>Todas</button>
    <button className={filter === 'pending' ? 'active' : ''} 
      onClick={() => setFilter('pending')}>Pendientes</button>
    <button className={filter === 'done' ? 'active' : ''} 
      onClick={() => setFilter('done')}>Completadas</button>
    <input value={search} onChange={(e) => setSearch(e.target.value)}
      placeholder="🔍 Buscar..." />
  </div>
);
