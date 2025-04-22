import NodeCache from 'node-cache'

// Configuração do cache (1 hora de duração padrão)
const cache = new NodeCache({
  stdTTL: 3600,
  checkperiod: 600, // Limpa itens expirados a cada 10 minutos
})

export default cache
