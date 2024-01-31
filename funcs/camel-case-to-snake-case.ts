/**
 * Recursively converts camelCase keys to snake_case in an object or array.
 *
 * @param objectItem - The object to be converted
 * @returns The resulting object with keys in snake_case
 */
export default function camelToSnake(objectItem: any): any {
  if (!objectItem || typeof objectItem !== "object") {
    return objectItem;
  }

  if (Array.isArray(objectItem)) {
    return objectItem.map((item) => camelToSnake(item));
  }

  return Object.keys(objectItem).reduce((acc, key) => {
    const snakeKey = key.replace(/([A-Z])/g, "_$1").toLowerCase();
    const value = objectItem[key];
    acc[snakeKey] = value !== undefined ? camelToSnake(value) : undefined;
    return acc;
  }, {} as Record<any, any>);
}
