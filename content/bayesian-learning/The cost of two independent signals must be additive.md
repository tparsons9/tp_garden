---
up: "[[Axioms for Prior-independent Information Cost (PST 2020)]]"
aliases:
tags:
  - concept/axiom
mathLink:
mathLink-blocks:
  axm-cost-independent-signals-additive: $C(\sigma\otimes\sigma^{\prime}) = C(\sigma)+C(\sigma^{\prime})$
---
> [!axiom] Axiom (Additivity with respect to independent experiments).
> For any two signals $\sigma$ and $\sigma^{\prime}$, 
> $$
> C(\sigma \otimes\sigma^{\prime}) = C(\sigma)+C(\sigma^{\prime}) 
>$$
> where $\sigma \otimes\sigma^{\prime}$ is the [[Multiplicity of independent signals|Product Signal]]. 

^axm-cost-independent-signals-additive


The axiom states that the cost of acquiring two (conditionally) independent signals is equal to the sum of their individual costs. As the discussion on [[Multiplicity of independent signals|Product Signal]] points out, if the signals were to be correlated, the joint realization (combination) of the signals would yield a lower cost relative to the sum of the content of their parts. 

This axiom imposes a **constant marginal cost of information**, similar to the one used to motivate [[Precision as Prior-Independent Cost for Gaussian Signals]]. 