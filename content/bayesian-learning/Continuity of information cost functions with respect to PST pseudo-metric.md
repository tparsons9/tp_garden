---
up: "[[Axioms for Prior-independent Information Cost (PST 2020)]]"
aliases:
tags:
  - concept/axiom
mathLink-blocks:
  axm-pst-absolute-continuity-wrt-pseudometric: Axm (Continuity). Cost is uniformly continuous w.r.t. pseudo-metric $d_{N}$.
---
> [!axiom] Axiom (Continuity).
> The function $C$ is **uniformly continuous** with respect to $d_{N}$

^axm-pst-absolute-continuity-wrt-pseudometric


>[!tldr]
>In short, Axiom 4 is the regulatory mechanism that ensures the cost of producing meaningful information (as captured by the likelihood ratios and their moments) does not vanish simply because the signal is sufficiently diluted, thereby locking in the functional form identified in Proposition 16. It acts like a quality control mechanism, ensuring that even vanishingly small likelihoods of acquiring highly specific information are properly accounted for in the cost structure.

The axiom's defined by [[PST Likelihood Ratio Convergence Pseudo-metric]]. The stronger *uniform*-continuity requirement is vital, because weaker definitions of convergence fail to deliver the desired characterization when combined with the other axioms in [[Axioms for Prior-independent Information Cost (PST 2020)]].

Specifically, absolute continuity buys us,

1. **Stability of Cost:** Continuity generally ensures that the cost function is well-behaved: slight changes in the signal structure (like making $\sigma^{\prime}$ close to $\sigma$), the cost should also change only slightly.
2. **Preventing collapse to zero cost**. Standard topologies on the signal space are too weak when dealing with sequences of slightly informative signals. For example,
	1. Consider a sequence of signals $\sigma_{n}$ where, with probability $\frac{1}{n}$, the outcome of $n$ coin flips is revealed and otherwise no information is revealed.
	2. Axioms 1-3 (which include Linearity in Dilution), imply that $C(\sigma_{n})=C(\sigma_{n^{\prime}})$ for all finite $n,\ n^{\prime}$ (assuming $\sigma_{n}$ a dilution of $\sigma_{n}^{\prime}$).
	3. However, the likelihood ratios for these $\sigma_{n}$ signals converge to the likelihood ratios of a signal that provides _no information_ [[Zero Cost of No Information]].
	4. If a weaker continuity axiom were used, it would mandate that $C(\sigma_{n})$ must converge to zero, forcing all signals satisfying the other three axioms to have zero cost
3. **Characterizing the cost function.** By requiring continuity relative to the tailored metric $d_{N}$, which forces convergence of the statistical moments of the [[Log-Likelihood Ratio]]s, the present axiom stabilizes the cost, and together with the other axioms in [[Axioms for Prior-independent Information Cost (PST 2020)]], provide the **necessary and sufficient conditions** to characterize the [[Cost function as the sum of KL divergences between conditional distributions]]. 