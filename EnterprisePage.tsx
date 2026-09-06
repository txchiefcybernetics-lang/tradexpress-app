import Heading from "./Heading";
import Section from "./Section";

export default function EnterprisePage() {
  return (
    <Section>

      <Heading level={1}>
        TradeXpress Enterprise System
      </Heading>

      <Section>

        <Heading level={2}>
          Executive Office
        </Heading>

        <Heading level={2}>
          AI Command Center
        </Heading>

        <Heading level={2}>
          Enterprise Analytics
        </Heading>

        <Section>

          <Heading level={3}>
            Knowledge Base
          </Heading>

          <Heading level={3}>
            HS Code Intelligence
          </Heading>

          <Heading level={3}>
            Customs Calculators
          </Heading>

          <Section>

            <Heading level={4}>
              Duty Calculator
            </Heading>

            <Heading level={4}>
              VAT Calculator
            </Heading>

            <Heading level={4}>
              Landed Cost Calculator
            </Heading>

          </Section>

        </Section>

      </Section>

      <Section>

        <Heading level={2}>
          Customs Brokerage
        </Heading>

        <Heading level={2}>
          Logistics & Operations
        </Heading>

        <Heading level={2}>
          Legal & Compliance
        </Heading>

        <Heading level={2}>
          Finance & Accounting
        </Heading>

        <Heading level={2}>
          Human Resources
        </Heading>

        <Heading level={2}>
          Technology & Innovation
        </Heading>

      </Section>

      <Section>

        <Heading level={2}>
          Enterprise Services
        </Heading>

        <Section>

          <Heading level={3}>
            Identity Service
          </Heading>

          <Heading level={3}>
            Authentication
          </Heading>

          <Heading level={3}>
            Authorization
          </Heading>

          <Heading level={3}>
            Runtime Manager
          </Heading>

          <Heading level={3}>
            Task Runner
          </Heading>

          <Heading level={3}>
            Scheduler
          </Heading>

          <Heading level={3}>
            Monitoring
          </Heading>

          <Heading level={3}>
            API Gateway
          </Heading>

        </Section>

      </Section>

      <Section>

        <Heading level={2}>
          AI Infrastructure
        </Heading>

        <Section>

          <Heading level={3}>
            OpenAI
          </Heading>

          <Heading level={3}>
            Local LLM
          </Heading>

          <Heading level={3}>
            Ollama
          </Heading>

          <Heading level={3}>
            Embedding Engine
          </Heading>

          <Heading level={3}>
            Vector Database
          </Heading>

          <Heading level={3}>
            Knowledge Server
          </Heading>

        </Section>

      </Section>

    </Section>
  );
}
