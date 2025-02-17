export default {
    SUCCESS: `The operation has been successful`,
    ERROR: `An error occurred during the operation`,
    NOT_FOUND: (entity: string) => `The requested ${entity} was not found`,
    UNAUTHORIZED: `You are not authorized to perform this action`,
    FORBIDDEN: `You are forbidden to perform this action`,
    CONFLICT: `The requested resource already exists`,
    TOO_MANY_REQUESTS: `The requested resource is unavailable , due to too many requests`
}
