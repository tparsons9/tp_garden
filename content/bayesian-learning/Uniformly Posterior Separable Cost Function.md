---
up: "[[Prior-Dependent Information Costs]]"
aliases:
  - UPS
tags:
  - concept/definition
  - micro/rational-inattention
mathLink-blocks:
  def-ups-cost: $\textbf{(UPS)}\quad \Phi(p)-\mathbb{E}_{q \sim \tau}[\Phi(q)]$
  pty-nonnegative-info-cost: "Non-negativity: $C(p, \\tau) \\ge 0$"
  pty-ups-blackwell-consistent: UPS Blackwell Consistent $C(p,\tau)=\int(\Phi(p)-\Phi(q))\,d\tau(q)$
  def-entropy-reduction-cost: $C_{\text{Ent}}(p,\tau)=H(p)-\mathbb{E}_{q\sim \tau}[H(q)],\  \forall (p,\tau)\in \mathcal{S}$
created: 2025-11-04 17:13:10
modified: 2026-01-13 05:03:23
---
A **Uniformly Posterior Separable (UPS)** cost function is a specific, widely used class of prior-dependent cost functions where the cost is defined as the **expected reduction in uncertainty**. Formally, 

> [!definition] Definition (UPS Cost Function).
>  The cost function $C:\mathcal{S}\to \mathbb{R}$ is **uniformly posterior separable (UPS)** if there is a strictly [[Concave Functions|concave function]] $\Phi$ such that 
> $$
> 	C(p,\tau) = \Phi(p)-\mathbb{E}_{q \sim \tau}[\Phi(q)]\qquad \forall (p,\tau) \in \mathcal{S}.
> $$

^def-ups-cost

Here, $\Phi$ is interpreted as a "pure" measure of uncertainty (like [[Shannon Entropy|entropy]] or variance). The cost is the uncertainty at the prior, $\Phi(p)$, minus the *expected* uncertainty remaining after observing the [[Information Structure|signal]], $\mathbb{E}_{q \sim \tau}[\Phi(q)]$ . 

### Properties 

- [[Zero Cost of No Information#^zero-cost-no-info-ups]]
> [!property] Property (Non-negativity of Information Costs).
>  $$
>  C(p, \tau) \ge 0 
>  $$

^pty-nonnegative-info-cost

 If this property were violated (i.e., $C(p, \tau) < 0$), an agent would face a trivial choice: acquire an infinite amount of information, as doing so would provide infinite utility. This property ensures a meaningful economic trade-off.

> [!property] Property (UPS Costs consistent with the Blackwell Order).
>  Let $\sigma,\sigma^{\prime}$ be arbitrary signals where $\sigma$ [[Blackwell Order|Blackwell dominates]] $\sigma^{\prime}$. Fix any prior $p$ and let $\tau_{\sigma}$ and $\tau_{\sigma^{\prime}}$ denote the distributions over posteriors that are induced by $\sigma$ and $\sigma^{\prime}$. Then, for any UPS cost function $C$, we have $C(p,\tau_{\sigma})\geq C(p,\tau_{\sigma^{\prime}})$ since 
> $$
> C(p,\tau)=\int(\Phi(p)-\Phi(q))\,d\tau(q)
> $$
> where $\Phi(p)-\Phi(q)$ is [[Convex Function|convex]] in $q$ and $\tau_{\sigma}$ dominates $\tau_{\sigma^{\prime}}$ in the [[Convex Order]]. 

^pty-ups-blackwell-consistent

In words UPS cost functions are consistent with the Blackwell order: if signal $\sigma$ is more informative than (Blackwell dominates) signal $\sigma'$, its cost must be greater than or equal to the cost of $\sigma'$ . 

This is because $\sigma$ Blackwell dominating $\sigma^{\prime}$ implies that the [[Signal-induced Belief Distribution|induced posterior]] $\tau_{\sigma}$ is a [[Mean-Preserving Spread|mean-preserving spread]] of $\tau_{\sigma^{\prime}}$. Since the cost $C(p, \tau) = \int (\Phi(p) - \Phi(q)) d\tau(q)$ is the integral of a **convex** function in $q$ (since $\Phi$ is concave, $-\Phi$ is convex), a mean-preserving spread must increase its expected value. 

---
## Examples 

> [!definition] Definition (Entropy Reduction).
> The cost of acquiring information that induces a [[Signal-induced Belief Distribution|induced posterior distribution]] $\tau$ from [[Prior Probability|prior]] $p$ is the **expected reduction in the entropy of the agent's belief**: 
> $$
> 	C_{\text{Ent}}(p,\tau)=H(p)-\mathbb{E}_{q\sim \tau}[H(q)],\  \forall (p,\tau)\in \mathcal{S}
> $$
> where $H(q)$ is the [[Shannon Entropy|entropy of uncertainty]]. 

^def-entropy-reduction-cost

This cost can be equivalently expressed as the expected [[Kullback-Leibler Divergence for Relative Entropy|KL Divergence]] from the prior to the posterior (see [[Entropy Reduction Cost is Expected KL Divergence]]). 

 Another natural choice for a UPS cost function is to use **variance** as the measure of uncertainty, 
 
> [!definition] Definition (Variance Reduction Cost).
> The **expected reduction in the variance** of an agent's belief is given by
> $$
> 	C_{\text{Var}}(p,\tau)=\mathrm{Var}(p)-\mathbb{E}_{q\sim \tau}[\mathrm{Var}(q)]
> $$

^def-variance-reduction-cost-ups

This is a valid UPS cost function by [[Frankel-Kamenica (2019) Microfoundation for UPS cost#^a5ef90|Frankel-Kamenica (2019)]] because the variance function is **strictly concave**, satisfying the requirement for the uncertainty function $\Phi$.  Under certain choices of priors, the Variance Reduction cost is bounded, but the entropy reduction cost may diverge. 

---

To understand what properties must be satisfied in order for the UPS uncertainty measure $\Phi$ to yield the interpretation of the "payoff loss from not knowing a state" in a decision problem, see [[Frankel-Kamenica (2019) Microfoundation for UPS cost]]. 


Note that UPS costs can be rewritten as [[Bregman Divergence]], making them as a special case of [[Posterior Separable Cost Functions]], see [[UPS Cost as Expected Bregman Divergence]]. 