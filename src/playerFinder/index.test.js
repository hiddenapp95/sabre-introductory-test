import * as playerFinder from "./";

test('Index exports correctly', () => {
    expect(!!playerFinder).toBe(true);
    expect(!!playerFinder.NAME).toBe(true);
    expect(!!playerFinder.fetchingPlayers).toBe(true);
    expect(!!playerFinder.getVisiblePlayers).toBe(true);
    expect(!!playerFinder.fetchPlayers).toBe(true);
    expect(!!playerFinder.filterPlayersBy).toBe(true);
    expect(!!playerFinder.AlertDialog).toBe(true);
    expect(!!playerFinder.PlayerFilters).toBe(true);
    expect(!!playerFinder.PlayersTable).toBe(true);
    expect(!!playerFinder.model).toBe(true);
});

