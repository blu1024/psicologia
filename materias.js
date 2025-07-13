
const materias = [
    {
        nombre: "Psicología General",
        anio: 1, tipo: "anual", estado: "bloqueada", correlativas: []
    },
    {
        nombre: "Historia de la Psicología",
        anio: 1, tipo: "1C", estado: "bloqueada", correlativas: []
    },
    {
        nombre: "Neurociencias",
        anio: 1, tipo: "1C", estado: "bloqueada", correlativas: []
    },
    {
        nombre: "Procesos Básicos I",
        anio: 1, tipo: "2C", estado: "bloqueada", correlativas: ["Psicología General"]
    },
    {
        nombre: "Metodología de la Investigación Psicológica",
        anio: 1, tipo: "2C", estado: "bloqueada", correlativas: ["Psicología General"]
    },
    {
        nombre: "Filosofía",
        anio: 1, tipo: "1C", estado: "bloqueada", correlativas: []
    },
    {
        nombre: "Epistemología",
        anio: 1, tipo: "2C", estado: "bloqueada", correlativas: ["Filosofía"]
    }
    // ... Resto de las materias se cargarán más adelante
];
