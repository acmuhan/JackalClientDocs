import fs from 'node:fs';
import path from 'node:path';

const rootDir = process.cwd();
const sourceFile = path.join(rootDir, 'test', 'COMMANDS.txt');
const outputDir = path.join(rootDir, 'docs', 'commands');

const sections = [
  { key: 'system', title: '系统命令', filename: 'system.md' },
  { key: 'file', title: '文件命令', filename: 'file.md' },
  { key: 'network', title: '网络命令', filename: 'network.md' },
  { key: 'bilibili', title: 'B站命令', filename: 'bilibili.md' },
  { key: 'text', title: '文本处理命令', filename: 'text.md' }
];

const textPrefixes = [
  '/echo', '/string', '/string2', '/string3', '/copystr', '/str',
  '/translate', '/translateto', '/translateloop', '/translateoffline',
  '/memeizer', '/textdatabase', '/tdb', '/pastebin', '/qrcode',
  '/calc', '/calculate', '/calccopy', '/getcalc'
];

const filePrefixes = [
  '/ls', '/pwd', '/cd', '/chdir', '/rm', '/remove', '/rmcom', '/removecom',
  '/file', '/findfile', '/findfileb', '/everything', '/hexviewfile',
  '/hexviewproc', '/cleardumps', '/clearcrashlogs', '/interpret', '/perform',
  '/load', '/unload'
];

const networkPrefixes = [
  '/ip', '/ipaddress', '/ipaddressex', '/iphorror', '/iphorrorex',
  '/tcptable', '/tcptable2', '/tcptable3', '/irc', '/ncm', '/cloudmusic',
  '/download', '/search', '/searchai', '/what', '/wtf'
];

function normalizeLines(content) {
  return content.replace(/\r\n/g, '\n').split('\n');
}

function trimBlankLines(lines) {
  let start = 0;
  let end = lines.length;
  while (start < end && lines[start].trim() === '') start += 1;
  while (end > start && lines[end - 1].trim() === '') end -= 1;
  return lines.slice(start, end);
}

function parseCommandBlocks(content) {
  const lines = normalizeLines(content);
  const blocks = [];
  let current = null;

  for (const line of lines) {
    const trimmed = line.trim();
    if (trimmed.startsWith('/')) {
      if (!current) {
        current = { aliases: [trimmed], details: [] };
      } else if (current.details.length === 0) {
        current.aliases.push(trimmed);
      } else {
        current.details = trimBlankLines(current.details);
        blocks.push(current);
        current = { aliases: [trimmed], details: [] };
      }
      continue;
    }

    if (current) current.details.push(line);
  }

  if (current) {
    current.details = trimBlankLines(current.details);
    blocks.push(current);
  }

  return blocks.filter((item) => item.aliases.length > 0);
}

function startsWithAny(value, prefixList) {
  return prefixList.some((prefix) => value.startsWith(prefix));
}

function pickCategory(block) {
  const aliases = block.aliases.map((name) => name.toLowerCase());

  if (aliases.some((name) => name.startsWith('/bili') || name.startsWith('/bilinick') || name.startsWith('/bilihot') || name.startsWith('/bilisuggest') || name.startsWith('/bilivideo') || name.startsWith('/biliprofile'))) {
    return 'bilibili';
  }
  if (aliases.some((name) => startsWithAny(name, textPrefixes))) {
    return 'text';
  }
  if (aliases.some((name) => startsWithAny(name, filePrefixes))) {
    return 'file';
  }
  if (aliases.some((name) => startsWithAny(name, networkPrefixes))) {
    return 'network';
  }

  return 'system';
}

function escapeCodeFence(text) {
  return text.replace(/```/g, '\\`\\`\\`');
}

function toSectionMarkdown(section, blocks) {
  const lines = [
    `# ${section.title}`,
    '',
    '> 本页由 `test/COMMANDS.txt` 自动拆分生成。',
    '',
    `共 ${blocks.length} 组命令。`,
    ''
  ];

  for (const block of blocks) {
    const title = block.aliases[0].replace(/`/g, '\\`');
    const detail = block.details.length > 0
      ? block.details.join('\n')
      : '（该命令在原始文档中未提供额外说明）';

    lines.push(`## \`${title}\``);
    lines.push('');
    lines.push('```text');
    lines.push(...block.aliases);
    lines.push('```');
    lines.push('');
    lines.push('说明摘录：');
    lines.push('');
    lines.push('```text');
    lines.push(...escapeCodeFence(detail).split('\n'));
    lines.push('```');
    lines.push('');
  }

  return `${lines.join('\n').trimEnd()}\n`;
}

function writeManual(blocks) {
  fs.mkdirSync(outputDir, { recursive: true });

  const grouped = new Map(sections.map((section) => [section.key, []]));
  for (const block of blocks) {
    grouped.get(pickCategory(block)).push(block);
  }

  const indexLines = [
    '# 完整命令手册',
    '',
    '> 本手册由 `test/COMMANDS.txt` 自动拆分生成，按场景分章节维护。',
    '',
    '## 章节',
    ''
  ];

  for (const section of sections) {
    const list = grouped.get(section.key);
    indexLines.push(`- [${section.title}](/commands/${section.filename.replace('.md', '')})（${list.length} 组）`);
    fs.writeFileSync(path.join(outputDir, section.filename), toSectionMarkdown(section, list), 'utf8');
  }

  indexLines.push('');
  fs.writeFileSync(path.join(outputDir, 'index.md'), `${indexLines.join('\n')}\n`, 'utf8');
}

const source = fs.readFileSync(sourceFile, 'utf8');
const blocks = parseCommandBlocks(source);
writeManual(blocks);

console.log(`Generated command manual pages from ${blocks.length} command blocks.`);
