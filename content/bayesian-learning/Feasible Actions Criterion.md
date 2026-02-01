---
up: "[[Blackwell Order]]"
aliases:
tags:
  - concept/definition
  - probability/method/dispersion
  - micro/information
mathLink-blocks:
  def-feasible-action: $d(a\mid  \theta) = \int_{s \in S}\alpha(a\mid  s)\sigma(s\mid  \theta)\,ds$
---
A signal is _more informative_ if observing the realization of the signal allows the agent to more effectively tailor his action to the state.

> [!definition] Definition (Feasible Action Distributions).
>  Fix any action set $A$. A conditional distribution over actions $d:\Theta\to\Delta(A)$ is **feasible** under $\sigma:\Theta\to\Delta(S)$ if there exists a mapping $\alpha:S\to\Delta(A)$ such that
>  $$
>  d(a\mid  \theta) = \int_{s \in S}\alpha(a\mid  s)\sigma(s\mid  \theta)\,ds
>  $$
>  Let $\Lambda_{\sigma}(A)$ denote the set of **all** feasible distributions under $\sigma$ given action set $A$.

^def-feasible-action


The definition describes the **structural capacity** of the signal to map states to actions via the signal realization, it is **independent** of the prior $p$.

When $\sigma$ is a _fully-revealing signal_ (e.g., $\sigma:\Theta\to\Delta(\Theta)$ satisfying $\sigma(\theta\mid \theta)=1,\ \forall \theta \in \Theta$), then every mapping $d:\Theta\to\Delta(A)$ is feasible under $\sigma$ (set $\alpha=d$). If $\sigma$ is more informative than $\sigma^{\prime}$, then $\Lambda_{\sigma}(A)$ must contain $\Lambda_{\sigma^{\prime}}(A)$ for every finite action set $A$.

If however, $\sigma$ is _uninformative_ (i.e., a constant), then $\Lambda_{\theta}(A)$ consists of all mappings $d:\Theta\to\Delta(A)$ that take each state into the same distribution over actions.

Larger sets $\Lambda_{\sigma}(A)$ allow the agent more flexibility in tailoring his action to the state, and in this sense are more valuable.

### Relationship to Garblings

Observe that $\alpha$ itself is a [[Markov Kernel]], and so $d$ can be interpreted as a [[Garblings|garbling]] of $\sigma$ where $A$ is the set of signal realizations.  Furthermore, the set $\Lambda_{\sigma}$ **compact** and **convex**. 