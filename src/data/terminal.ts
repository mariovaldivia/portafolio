export interface TerminalLine {
  /** cmd: línea con prompt "$"; out: salida normal; ok: salida resaltada en acento. */
  kind: 'cmd' | 'out' | 'ok';
  text: string;
}

export const terminalLines: TerminalLine[] = [
  { kind: 'cmd', text: 'docker compose up -d' },
  { kind: 'ok', text: ' ✔ postgres   healthy' },
  { kind: 'ok', text: ' ✔ php-fpm    started' },
  { kind: 'cmd', text: 'bin/phpunit' },
  { kind: 'out', text: ' ............... 142 / 142' },
  { kind: 'ok', text: ' OK (142 tests, 389 assertions)' },
];
