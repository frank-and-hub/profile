const redisConfig = {
    url: process.env.UPSTASH_REDIS_REST_URL || '',
    token: process.env.UPSTASH_REDIS_REST_TOKEN || '',
};

// Add validation
export function getRedisConfig() {
    if (!redisConfig.url || !redisConfig.token) {
        console.warn('Redis configuration missing - running in fallback mode');
        return null;
    }
    return redisConfig;
}