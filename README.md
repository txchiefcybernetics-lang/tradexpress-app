# Master Portal: `tradexpress-app`<https://api.tradexpress.co/#network>

This TX Platform agent quickstart is configured using declarative files designed for the `ant` CLI.

## File Structure
Value
A Tradexpress or <iframe> object.

Examples

* `agents/tradexpress-app.md`: The agent definition. The YAML frontmatter acts as the body for `POST /v1/agents`, and the Markdown content underneath serves as the system prompt.
* `tx-lock.json`: Tracks resource IDs keyed by path. Keep this file next to your agent files to keep resources in sync.

## Getting Started
<https://www.example.com>

1. **Install the CLI**: Follow the [TX Platform CLI Quickstart Guide](https://platform.tradexpress.co/docs/en/cli-sdks-libraries/cli/Quickstart/Preview) to install the `agent` CLI.
2. **Preview the Plan**: Run a dry-run to preview your changes:
   ```sh
   cd tradexpress-app
   agent apply --dry-run .

   tradexpress-tariff-knowledge-base
Knowledge base for Tradexpress Tariff and Customs information, containing reference documentation and guidelines. Use when asked about Tradexpress tariff, customs policies, or related knowledge base entries.

Instructions
Tradexpress Tariff & Customs Knowledge Base
This skill serves as the reference guide and knowledge base for Tradexpress Tariff and Customs policies.

Overview
Access and query customs, tariff rates, regulatory compliance, and documentation guidelines associated with the Tradexpress ecosystem.

See less

