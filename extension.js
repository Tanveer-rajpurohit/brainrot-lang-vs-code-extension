const vscode = require("vscode");

const KEYWORDS = [
  {
    keyword: "trust_me_bro",
    equivalent: "let / var",
    description: "Declare a variable. Equivalent to `let` or `var` in JavaScript.",
    example: 'trust_me_bro name = "BrainRot"',
  },
  {
    keyword: "say_my_name",
    equivalent: "print / console.log",
    description: "Print a value to stdout. Equivalent to `console.log` or `print`.",
    example: 'say_my_name("Hello, world!")',
  },
  {
    keyword: "chat_is_this_real",
    equivalent: "if",
    description: "Start a conditional `if` block. Evaluates condition and runs body if truthy.",
    example: "chat_is_this_real (x > 10) { ... }",
  },
  {
    keyword: "wait_hold_up",
    equivalent: "else if",
    description: "An `else if` branch. Checked when the previous `if` / `else if` was false.",
    example: "wait_hold_up (x == 5) { ... }",
  },
  {
    keyword: "nah_bro",
    equivalent: "else",
    description: "The `else` branch. Runs when all preceding conditions were false.",
    example: "nah_bro { ... }",
  },
  {
    keyword: "on_repeat",
    equivalent: "while",
    description: "A `while` loop. Repeats the body as long as the condition is truthy.",
    example: "on_repeat (i < 10) { ... }",
  },
  {
    keyword: "run_it_back",
    equivalent: "for",
    description: "A `for` loop with init, condition, and post expressions.",
    example: "run_it_back (trust_me_bro i = 0; i < 10; i++) { ... }",
  },
  {
    keyword: "let_him_cook",
    equivalent: "function",
    description: "Declare a named function.",
    example: "let_him_cook add(a, b) { take_this a + b }",
  },
  {
    keyword: "take_this",
    equivalent: "return",
    description: "Return a value from the current function.",
    example: "take_this result",
  },
  {
    keyword: "mission_abort",
    equivalent: "break",
    description: "Break out of the nearest loop immediately.",
    example: "mission_abort",
  },
  {
    keyword: "skip_this_one",
    equivalent: "continue",
    description: "Skip to the next iteration of the nearest loop.",
    example: "skip_this_one",
  },
  {
    keyword: "fr_fr",
    equivalent: "true",
    description: "Boolean literal `true`.",
    example: "trust_me_bro alive = fr_fr",
  },
  {
    keyword: "cap",
    equivalent: "false",
    description: "Boolean literal `false`.",
    example: "trust_me_bro done = cap",
  },
  {
    keyword: "ghosted",
    equivalent: "null / nil",
    description: "The null / nil value. Represents the absence of a value.",
    example: "trust_me_bro nothing = ghosted",
  },
];

const keywordMap = new Map(KEYWORDS.map((k) => [k.keyword, k]));

function activate(context) {
  const selector = { language: "brainrot", scheme: "file" };

  const hoverProvider = vscode.languages.registerHoverProvider(selector, {
    provideHover(document, position) {
      const range = document.getWordRangeAtPosition(position, /[a-zA-Z_][a-zA-Z0-9_]*/);
      if (!range) return;

      const word = document.getText(range);
      const entry = keywordMap.get(word);
      if (!entry) return;

      const md = new vscode.MarkdownString();
      md.appendMarkdown(`**\`${entry.keyword}\`** — *${entry.equivalent}*\n\n`);
      md.appendMarkdown(`${entry.description}\n\n`);
      md.appendCodeblock(entry.example, "brainrot");
      return new vscode.Hover(md, range);
    },
  });

  const completionProvider = vscode.languages.registerCompletionItemProvider(
    selector,
    {
      provideCompletionItems() {
        return KEYWORDS.map((entry) => {
          const item = new vscode.CompletionItem(entry.keyword, vscode.CompletionItemKind.Keyword);
          item.detail = `→ ${entry.equivalent}`;
          item.documentation = new vscode.MarkdownString(
            `${entry.description}\n\n\`\`\`brainrot\n${entry.example}\n\`\`\``
          );
          item.insertText = entry.keyword;
          return item;
        });
      },
    }
  );

  context.subscriptions.push(hoverProvider, completionProvider);
}

function deactivate() {}

module.exports = { activate, deactivate };
