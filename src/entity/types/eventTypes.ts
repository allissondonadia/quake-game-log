const EventType = Object.freeze({
  INIT_GAME: 'InitGame:',
  EXIT: 'Exit:',
  CLIENT_CONNECT: 'ClientConnect:',
  CLIENT_DISCONNECT: 'ClientDisconnect:',
  CLIENT_USER_INFO_CHANGED: 'ClientUserinfoChanged:',
  CLIENT_BEGIN: 'ClientBegin:',
  SHUTDOWN_GAME: 'ShutdownGame:',
  ITEM: 'Item:',
  KILL: 'Kill:',
  SCORE: 'score:',
  TEAM_RED: 'red:',
  TEAM_BLUE: 'blue:',
  SAY: 'say:',
});

export default EventType;
