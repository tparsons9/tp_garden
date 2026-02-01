---
up: "[[Prior-Independent Information Costs]]"
aliases:
tags:
  - concept/model
  - micro/information
created: 2025-11-05 04:58:48
modified: 2026-01-13 05:04:40
---
 Let $\mathcal{E}$ be the class of all signals that satisfy [[Log-Likelihood Ratio#^asm-llr-gam-finite]] . An [[Information Costs|information cost function]] is any map $C:\mathcal{E}\to[0,\infty)$. The cost function should satisfy:

![[Axiom_1004ba21-f22d_ Consistency with the Blackwell Order#^axm-blackwell-consistent-information-costs]]

That is, more informative costs are more costly to acquire.

![[The cost of two independent signals must be additive#^axm-cost-independent-signals-additive]]

![[The cost of a signal is linear in the probability that it generates information#^axm-pst-signal-linear-in-dilution]]


![[Continuity of information cost functions with respect to PST pseudo-metric#^axm-pst-absolute-continuity-wrt-pseudometric]]

The [[Prior-Independent Cost is a Weighted Sum of KL-Divergences (PST 2020)]] shows that the axioms can be applied to show that we can represent [[Prior-Independent Information Costs]] as the sum of KL-Divergence, and further, if the states are binary, we no longer need [[Continuity of information cost functions with respect to PST pseudo-metric|Axiom (Continuity)]]. Finally, [[Prior-Independent Cost is a Weighted Sum of KL-Divergences (PST 2020)#^e8b373]] shows that the PI costs are a subclass of [[Posterior Separable Cost Function]], but not UPS.
