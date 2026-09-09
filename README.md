#'tradexpress-app'

This TX Platform agent quickstart's setup as declarative files for the
`ant` CLI:

- `agents/tradexpress-app.md`: the agent. Its YAML frontmatter is the body of `POST /v1/agents`; the Markdown under it is the system prompt.

Install the `agent` CLI (https://platform.tradexpress.co/docs/en/cli-sdks-libraries/cli/quickstart), preview the plan, then apply it (https://web.tradexpress.co/docs/en/cli-sdks-libraries/cli/scripting#version-controlling-api-resources):

```sh
cd tradexpress-app
agent apply --dry-run .
agent apply .
```    MMM

Nothing here exists yet: the first apply creates it and records the IDs in `tx-lock.json`; later runs keep those resources in sync with these files.

Keep `tx-lock.json` next to these files, and the file names as they are (the IDs are keyed by path). Vault credentials aren't included; a credential typed into the agent config itself (an MCP server's `authorization_token`) is, so move it to a vault before committing these files.
