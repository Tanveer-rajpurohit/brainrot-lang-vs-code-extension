# BrainRot Lang — VS Code Extension

[![VS Code](https://img.shields.io/badge/VS%20Code-1.74+-007ACC?style=flat&logo=visual-studio-code)](https://code.visualstudio.com/)
[![Version](https://img.shields.io/badge/version-1.0.0-purple?style=flat)]()
[![License](https://img.shields.io/badge/license-MIT-green?style=flat)]()

Full VS Code support for **BrainRot Lang** (`.brt` files) — syntax highlighting, code snippets, custom file icons, and bracket matching.

---

## Features

### Syntax Highlighting
Every BrainRot keyword is highlighted with distinct colors so you can tell `trust_me_bro` from `let_him_cook` at a glance.

| Color | Elements |
|---|---|
| Keyword purple | `trust_me_bro`, `let_him_cook`, `chat_is_this_real`, `run_it_back`, etc. |
| String green | `"hello world"` |
| Number cyan | `42`, `3.14` |
| Boolean / null | `fr_fr`, `cap`, `ghosted` |
| Comment grey | `# this is a comment` |
| Operator | `+`, `-`, `*`, `/`, `==`, `&&`, `||`, etc. |

### Code Snippets

Type a prefix and hit `Tab` to expand:

| Prefix | Expands to |
|---|---|
| `main` | `let_him_cook main() { ... }` |
| `fn` | Function definition skeleton |
| `var` | `trust_me_bro name = value` |
| `if` | `chat_is_this_real (condition) { ... }` |
| `ife` | if / else block |
| `for` | `run_it_back` for-loop skeleton |
| `while` | `on_repeat (condition) { ... }` |
| `print` | `say_my_name(value)` |
| `ret` | `take_this value` |

### Custom File Icon
`.brt` files get the BrainRot brain icon in the VS Code file explorer.

### Bracket & Comment Configuration
- Auto-closes `{`, `(`, `[`, `"`, `'`
- Line comments with `#`
- Correct indentation rules for blocks

---

## Installation

### From `.vsix` (manual)

1. Download `brainrot-lang-1.0.0.vsix` from [GitHub Releases](https://github.com/Tanveer-rajpurohit/brainrot-lang/releases)
2. Open VS Code
3. Open the Command Palette (`Ctrl+Shift+P` / `Cmd+Shift+P`)
4. Run **Extensions: Install from VSIX...**
5. Select the downloaded `.vsix` file
6. Reload VS Code

### Verify

Open any `.brt` file — the language should show as **BrainRot** in the bottom status bar and keywords should be highlighted.

---

## Usage

Create a file ending in `.brt` and start writing:

```brainrot
let_him_cook main() {
    trust_me_bro name = "Walter White"
    say_my_name("my name is " + name)

    run_it_back (trust_me_bro i = 0; i < 5; i += 1) {
        chat_is_this_real (i % 2 == 0) {
            say_my_name("even: " + i)
        } nah_bro {
            say_my_name("odd: " + i)
        }
    }
}
```

---

## Running `.brt` Files

Install the BrainRot Lang binary from [GitHub Releases](https://github.com/Tanveer-rajpurohit/brainrot-lang/releases), then run directly from VS Code's integrated terminal:

```bash
brainrot run yourfile.brt
```

Debug views:
```bash
brainrot tokens yourfile.brt   # token stream
brainrot ast    yourfile.brt   # AST tree
```

---

## Extension Details

| Property | Value |
|---|---|
| Publisher | TanveerRajpurohit |
| Language ID | `brainrot` |
| File extensions | `.brt` |
| Min VS Code version | 1.74.0 |
| Activation | On `.brt` file open |

---

## Related

- [BrainRot Lang (compiler)](https://github.com/Tanveer-rajpurohit/brainrot-lang) — the Go interpreter
- [BrainRot Lang Web](https://github.com/Tanveer-rajpurohit/brainrot-lang) — docs and landing page

---

## License

MIT — no cap.
