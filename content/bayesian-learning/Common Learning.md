---
up: "[[Bayesian Learning]]"
aliases:
tags:
  - concept/definition
  - bayes/learning
  - micro/information
---
While [[Individual Learning]] focuses on a single agent's convergence to the truth, **common learning** addresses whether multiple agents not only learn the true state individually but eventually realize, to a high degree of certainty, that everyone else has done so as well.

> [!definition] Definition (Common Learning).
> Agents **commonly learn** $\theta$ if for each $q \in (0,1)$, there exists $T<\infty$ such that
>
> $$
> P_{\theta}(C_{t}^{q}(\{ \theta \}\times \mathcal{X}^{\infty}))>q\qquad \forall t>T 
>$$
>
> where $C_{t}^{q}(\cdot)$ is defined as in [[Common p-Belief#^ml-def-common-q-belief|common q-belief]].

Equivalently,

$$
\lim_{ t \to \infty } P_{\theta}(C_{t}^{q}(\{ \theta \}\times \mathcal{X}^{\infty}))=1\qquad \forall q \in (0,1)
$$

That is, Agents commonly learn *if they commonly learn each* $\theta \in \Theta$.

## Discussion

In [[Aumann's "Agreeing to Disagree" (1976)]], the theorem states that if agents' posterior beliefs about an event are **[[Common Knowledge|common knowledge]]**, those beliefs must be identical. This result applies to the common $q$-belief by taking $q=1$. Therefore, common learning is a prerequisite for strong agreement among agents.

#### Relation to Individual Learning

When agents are rational Bayesians operating under standard assumptions, individual learning (where each agent learns the true parameter $\theta$) does not automatically guarantee common learning. The relationship depends on the correlation and complexity of the signals.

- **Perfect Correlation (Public Signals)**
	- If signals are perfectly correlated, individual learning implies common learning because agents always share the same history and thus the same posterior beliefs.
- **Conditional Independence:**
	- If agents individually learn and their signs are conditionally independent given the parameter (meaning agent 1's signal is uninformative about agent $2$'s signal once the parameter is known ), [[Individual Learning implies Common Learning#^ml-prp-conditional-independence-individual-common]] . 
- **Finite Signal Space**:
	- if the set of signal realizations is **finite**, [[Individual Learning implies Common Learning#^70a4cf]] even when the signals are correlated. 
	- This result is established by showing that high-order beliefs cannot escape the agent's first-order belief. 

In general, the relationship between individual learning and common learning can break down when signal spaces are infinite or complex, see [[Individual Learning implies Common Learning#Intermediate Correlation breaks Proposition 1.]] applied to the [[Rubinstein (1989)'s Email Game]]. 