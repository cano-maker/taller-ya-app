// --- MOCK DATA ---
export const workshops = [
    { id: 1, name: 'Taller El Veloz', rating: 4.5, services: ['Mecánica General', 'Frenos', 'Aceite'], address: 'Cra 45 # 22-10, Medellín', image: 'https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80', description: 'Expertos en mecánica general con más de 20 años de experiencia. Ofrecemos un servicio rápido y confiable para todo tipo de vehículos.', gallery: ['https://images.unsplash.com/photo-1622636164999-398d7a797a8f?auto=format&fit=crop&w=600', 'https://images.unsplash.com/photo-1599493343693-ef4973c1519b?auto=format&fit=crop&w=600', 'https://images.unsplash.com/photo-1617170185353-7b01243414d3?auto=format&fit=crop&w=600'], reviews: [{user: 'Ana G.', rating: 5, comment: 'Excelente servicio, muy profesionales.'}, {user: 'Carlos P.', rating: 4, comment: 'Buen trabajo, aunque un poco demorado.'}] },
    { id: 2, name: 'AutoFix Express', rating: 4.8, services: ['Servicio a Domicilio', 'Baterías', 'Llantas'], address: 'Calle 10 # 43A-30, El Poblado', image: 'https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80', description: 'Tu solución automotriz a domicilio. Llevamos el taller a tu casa u oficina para reparaciones menores y mantenimiento.', gallery: ['https://images.unsplash.com/photo-1567789863312-ab45b41b26d4?auto=format&fit=crop&w=600'], reviews: [{user: 'Maria F.', rating: 5, comment: 'Súper conveniente y rápido. Me salvaron el día.'}] },
    { id: 3, name: 'Frenos y Lujos La 80', rating: 4.2, services: ['Frenos', 'Suspensión', 'Alineación'], address: 'Av. 80 # 30-15, Belén', image: 'https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80', description: 'Especialistas en sistemas de frenos y suspensión. La seguridad de tu vehículo es nuestra prioridad.', gallery: [], reviews: [] },
    { id: 4, name: 'Taller de Confianza', rating: 5.0, services: ['Mecánica General', 'Eléctrico', 'Diagnóstico'], address: 'Cl. 34 # 65-21, Laureles', image: 'https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80', description: 'Servicio honesto y de alta calidad. Usamos partes originales y garantizamos nuestro trabajo.', gallery: [], reviews: [{user: 'Juan V.', rating: 5, comment: 'El mejor taller de Medellín, sin duda.'}] },
];

export const featuredServices = [
    { name: 'Mecánica General', icon: 'Wrench' },
    { name: 'Servicio a Domicilio', icon: 'Car' },
    { name: 'Cambio de Aceite', icon: 'Oil' },
    { name: 'Frenos', icon: 'Disc' },
    { name: 'Baterías', icon: 'Battery' },
    { name: 'Llantas y Rines', icon: 'Wheel' },
];
