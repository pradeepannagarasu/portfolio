export default function ModelDecision() {
  return (
    <div className="prose prose-lg max-w-none">
      <h1>Pretrained vs Fine-Tuned Model Decision Making</h1>
      <p>
        One of the most critical decisions in building LLM-based systems is
        choosing between using pretrained models as-is, fine-tuning them, or
        training custom models. This decision impacts cost, performance,
        maintainability, and time-to-market. This guide provides a framework for
        making these choices systematically.
      </p>

      <h2>Decision Framework</h2>
      <p>The choice depends on three primary factors:</p>
      <ol>
        <li>
          <strong>Task specificity:</strong> How specialized is your use case?
        </li>
        <li>
          <strong>Data availability:</strong> Do you have sufficient labeled
          data?
        </li>
        <li>
          <strong>Performance requirements:</strong> What accuracy/quality level
          is needed?
        </li>
      </ol>

      <h2>Pretrained Models (Zero-Shot/Few-Shot)</h2>
      <h3>When to Use</h3>
      <ul>
        <li>General-purpose tasks (summarization, translation, Q&A)</li>
        <li>Tasks where prompt engineering is sufficient</li>
        <li>Rapid prototyping and MVP development</li>
        <li>Limited or no training data available</li>
        <li>Tasks that require broad knowledge (not domain-specific)</li>
      </ul>

      <h3>Advantages</h3>
      <ul>
        <li>
          <strong>Fast iteration:</strong> No training time, immediate deployment
        </li>
        <li>
          <strong>Lower cost:</strong> No compute resources for training
        </li>
        <li>
          <strong>Maintenance:</strong> Provider handles model updates
        </li>
        <li>
          <strong>Generalization:</strong> Works across diverse inputs
        </li>
      </ul>

      <h3>Limitations</h3>
      <ul>
        <li>
          <strong>Control:</strong> Limited control over model behavior
        </li>
        <li>
          <strong>Cost per inference:</strong> API costs can add up at scale
        </li>
        <li>
          <strong>Latency:</strong> Network calls to external APIs
        </li>
        <li>
          <strong>Data privacy:</strong> Data sent to external services
        </li>
        <li>
          <strong>Consistency:</strong> Outputs can vary between calls
        </li>
      </ul>

      <h2>Fine-Tuning</h2>
      <h3>When to Use</h3>
      <ul>
        <li>Domain-specific terminology or knowledge required</li>
        <li>Consistent output format/style needed</li>
        <li>
          Sufficient labeled examples available (typically 100+ for simple
          tasks, 1000+ for complex)
        </li>
        <li>Need to reduce API costs at scale</li>
        <li>Privacy/compliance requires on-premises deployment</li>
        <li>Latency requirements demand local inference</li>
      </ul>

      <h3>Advantages</h3>
      <ul>
        <li>
          <strong>Specialization:</strong> Model learns domain-specific patterns
        </li>
        <li>
          <strong>Consistency:</strong> More predictable outputs
        </li>
        <li>
          <strong>Efficiency:</strong> Smaller models can match larger pretrained
          models for specific tasks
        </li>
        <li>
          <strong>Control:</strong> Full control over model behavior
        </li>
        <li>
          <strong>Cost:</strong> Lower per-inference cost (if self-hosted)
        </li>
      </ul>

      <h3>Fine-Tuning Approaches</h3>
      <h4>Full Fine-Tuning</h4>
      <p>Update all model parameters. Most expensive but most flexible. Use when:</p>
      <ul>
        <li>Large dataset available</li>
        <li>Task is very different from pretraining</li>
        <li>Maximum performance needed</li>
      </ul>

      <h4>LoRA (Low-Rank Adaptation)</h4>
      <p>
        Train small adapter matrices instead of full model. Much cheaper, often
        90% of full fine-tuning performance. Use when:
      </p>
      <ul>
        <li>Limited compute budget</li>
        <li>Task is similar to pretraining</li>
        <li>Rapid experimentation needed</li>
      </ul>

      <h4>QLoRA</h4>
      <p>Quantized LoRA. Enables fine-tuning on consumer GPUs. Use for:</p>
      <ul>
        <li>Very limited compute resources</li>
        <li>Smaller models (7B-13B parameters)</li>
      </ul>

      <h2>Hybrid Approaches</h2>
      <p>Many production systems combine approaches:</p>
      <ul>
        <li>
          <strong>RAG + Pretrained:</strong> Use embeddings and retrieval to
          provide context to pretrained models
        </li>
        <li>
          <strong>Fine-tuned + Pretrained:</strong> Use fine-tuned model for
          specific task, pretrained for general reasoning
        </li>
        <li>
          <strong>Routing:</strong> Route simple queries to cheaper/faster
          models, complex ones to expensive models
        </li>
      </ul>

      <h2>Cost Considerations</h2>
      <p>Calculate total cost of ownership:</p>
      <ul>
        <li>
          <strong>Pretrained:</strong> API cost × number of inferences + prompt
          engineering time
        </li>
        <li>
          <strong>Fine-tuned:</strong> Training cost + inference infrastructure +
          model maintenance
        </li>
      </ul>
      <p>
        Break-even point typically around 100K-1M inferences per month (depends
        on model size and API pricing).
      </p>

      <h2>Conclusion</h2>
      <p>
        Start with pretrained models and prompt engineering. Only move to
        fine-tuning when you have clear evidence it's needed: either prompt
        engineering isn't achieving required quality, or costs/latency at scale
        justify the investment. Most production systems use a combination,
        routing different tasks to different models based on complexity and
        requirements.
      </p>
    </div>
  );
}

