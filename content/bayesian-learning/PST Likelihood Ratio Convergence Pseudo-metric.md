---
up: "[[Signal Dispersion and Informativeness]]"
aliases:
tags:
  - concept/definition
  - probability/metric
---
> [!definition] Definition (Signal Pseudo-metric $d_{N}$).
> Given an upper bound $N\geq 1$, define,
>
> $$
> d_{N}(\sigma,\sigma^{\prime})= \max_{\theta \in \Theta}d_{TV}(\sigma_{\theta},\sigma_{\theta}^{\prime})+ \max_{\theta \in\Theta}\max_{\alpha \in \{ 0,\dots,N \}^{n}}\lvert M_{\theta}^{\sigma}(\alpha)-M_{\theta}^{\sigma^{\prime}}(\alpha) \rvert  
>$$
>
>where $d_{TV}$ denotes the total variation distance and $M_{\theta}$ is the [[Log-Likelihood Ratio#^ab1813]] (finite) expected moment for the LLR.
>

This pseudo-metric is designed to ensure that if two signals are "close" in terms of how an agent uses them to update beliefs (which is dependent on their likelihood ratios), then their costs should also be close.

### Decomposition

#### Total Variational Distance (First Term)

$\max_{\theta \in \Theta}d_{TV}(\sigma_{\theta},\sigma_{\theta}^{\prime})$ measures how close the [[Conditional Probability Distribution|conditional probability distributions]] of the signal realizations $(\sigma_{\theta},\sigma_{\theta}^{\prime})$ are across **all states** $\theta$. This is the standard way to ensure that the physical outcomes of the experiments are similar.

#### Likelihood Ratio Moments (Second Term)

The second component involving $M_{\theta}^{\sigma}(\alpha)$ compares the moments of the [[Log-Likelihood Ratio]] of the two signals, up to a certain degree (bound) $N$. $M_{\theta}^{\sigma}(\alpha)$ measures the expected product of log-likelihood ratios (or their absolute values), averaged over the distribution of $\sigma_{\theta}$.

>[!insight]
>The statistical informativeness of a signal is encoded entirely within its likelihood ratios $(\ell_{\theta,\theta^{\prime}}^{\sigma})$, which determine how [[Posterior Probability|posterior beliefs]] change
>
>By enforcing convergence of these moments up to order $N$, $d_{N}$ ensures that the informational properties of the signal (e.g., ability to distinguish between states) are similar, preventing small or non-obvious differences in the signal distributions from causing large, discontinuous jumps in the cost.



