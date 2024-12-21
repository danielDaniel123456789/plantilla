function inicializarLugaresNormalizados() {
    for (const [clave, valor] of Object.entries(lugaresPersonalizados)) {
        const claveNormalizada = normalizarTexto(clave);
        lugaresPersonalizadosNormalizados[claveNormalizada] = valor;
    }
}