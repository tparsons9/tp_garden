---
up: "[[Signal Dispersion and Informativeness]]"
aliases:
  - Blackwell Informativeness Theorem
  - partial Blackwell Order
  - Blackwell's Equivalence Theorem
tags:
  - concept/theorem
  - micro/information
---
This introduces Blackwell partial order on signals, which considers one signal to be more informative than another if it is more useful for all decision problems. If $\sigma$ dominates $\sigma^{\prime}$ in this Blackwell order, we will say that $\sigma$ is _more informative than_ $\sigma^{\prime}$, or that $\sigma$ _Blackwell-dominates_ $\sigma^{\prime}$. 

> [!theorem] Theorem (Blackwell Informativeness).
> The following are equivalent: 
> 1. $\sigma^{\prime}$ is a [[Garblings|garbling]] of $\sigma$.
> 2. $\sigma$ is more informative than $\sigma^{\prime}$ ([[Instrumental Value of the Signal]])
> 3. $\Lambda_{\sigma^{\prime}}(A)\subseteq\Lambda_{\sigma}(A)$ for every finite action set $A$ ([[Feasible Actions Criterion]])
> 4. For any prior on $\Theta$, if we define $F$ and $F^{\prime}$ to be the distributions of posterior beliefs induced by $\sigma$ and $\sigma^{\prime}$ under this prior, then $F$ is a [[Mean-Preserving Spread|mean-preserving spread]] of $F^{\prime}$.
> 5. For any prior on $\Theta$, if we define $F$ and $F^{\prime}$ to be the distributions of posterior beliefs induced by $\sigma$ and $\sigma^{\prime}$ under this prior, then $F$ dominates $F^{\prime}$ in the [[Convex Order|convex order]]. 
