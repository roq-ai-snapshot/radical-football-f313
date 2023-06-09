const mapping: Record<string, string> = {
  academies: 'academy',
  'parent-requests': 'parent_request',
  players: 'player',
  users: 'user',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}
