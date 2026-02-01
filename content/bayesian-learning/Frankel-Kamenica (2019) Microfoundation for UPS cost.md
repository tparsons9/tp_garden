---
up: "[[Uniformly Posterior Separable Cost Function]]"
aliases:
tags:
  - concept/theorem
  - micro/rational-inattention
mathLink-blocks:
  def-payoff-loss-valid-uncertainty-func: $\Phi_\mathcal{D}(q) = \mathbb{E}_q[\max_{a \in A} u(a, \theta)] - \max_{a \in A} \mathbb{E}_q[u(a, \theta)]$
created: 2025-11-04 17:33:46
modified: 2026-01-13 05:03:48
---
The following theorem provides a **decision-theoretic microfoundation** for the uncertainty function $\Phi$ used in [[Uniformly Posterior Separable Cost Function|UPS cost functions]]. 

It answers the question:

>[!question] 
>What properties must an uncertainty measure $\Phi$ have so that it can be interpreted as the **"payoff loss from not knowing the state"** in some [[Decision Problems|decision problem]] $\mathcal{D}$?

> [!theorem] Theorem (Frankel and Kamenica (2019)).
> An uncertainty function $\Phi:\Delta(\Theta)\to \mathbb{R}$ is **valid** (i.e., $\Phi=\Phi_{\mathcal{D}}$ for some decision problem $\mathcal{D}$) if and only if it satisfies: 
> - [[Zero Cost of No Information#^zero-cost-no-info-ups]]
> - $\Phi(p)=0$ for all [[Degenerate Distributions|degenerate distributions]] $p$
> - $\Phi$ is [[Concave Function|concave]]

^a5ef90

### "Valid" Uncertainty Function $\Phi_\mathcal{D}$

> [!definition] Definition (Payoff Loss of valid uncertainty function)
> For any belief $q\in\Delta(\Theta)$ and decision problem $\mathcal{D}=(A,u)$, let 
> $$
> \Phi_\mathcal{D}(q) = \mathbb{E}_q[\max_{a \in A} u(a, \theta)] - \max_{a \in A} \mathbb{E}_q[u(a, \theta)]
> $$
> be the payoff loss of the agent from not knowing a state which is distributed according to $q$. 

^def-payoff-loss-valid-uncertainty-func

* **Term 1:** The (hypothetical) best payoff if the agent could condition their action on the *realized state* $\theta$
* **Term 2:** The actual best payoff the agent can get with belief $q$ *before* learning the state

This theorem shows that any $\Phi$ that is concave and zero at the "edges" of the belief space can be thought of as the value of perfect information for some problem.

### Examples
* **Entropy:** $\Phi(q) = H(q)$ is microfounded by $u(a, \theta) = \ln(a(\theta))$
* **Variance:** $\Phi(q) = \text{Var}_q(\theta)$ is microfounded by $u(a, \theta) = -(a-\theta)^2$ (quadratic loss)