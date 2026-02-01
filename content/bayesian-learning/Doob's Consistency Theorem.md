---
up: "[[Bayesian Learning]]"
aliases:
tags:
  - concept/theorem
  - bayes/learning
  - convergence/almost-sure
mathLink-blocks:
  ml-prp-doobs-posterior-consistency: $\text{Posterior Consistency. } \lim_{ t \to \infty } \mathbb{P}(\theta \in B\mid  X_{1},X_{2},\dots X_{t}) = 1\ P_{\theta_{0}}\text{-a.s.}$
  ml-alias-doob-inconsistent-measure-zero: posterior consistency not guaranteed on a measure zero set
---
Doob's Consistency theorem provides a formal guarantee that [[Bayesian Learning]] _works_. As long as different "true states of the world" produce recognizably different data (based on the identifiability assumption), a Bayesian agent who keeps observing new signals will _almost surely_ have their beliefs converge to a point mass on the _actual_ true state. 

## Statements 

> [!proposition] Proposition (Convergence of Posterior Expectation).
> Suppose that [[Identifiability Assumption]] is satisfied, and let $g:\Theta\to \mathbb{R}$ be any measurable function satisfying $\mathbb{E}|g(\theta)|<\infty$. Then, 
> $$
> \lim_{ t \to \infty } \mathbb{E}[g(\theta)\mid  X_{1},X_{2},\dots,X_{t}]=g(\theta)\qquad P\text{-a.s.} 
>$$

The agent's posterior expectation of $g(\theta)$ converges to the function's true value, $g(\theta)$, **almost surely**. When choosing the identity function, $g(\theta)=\theta$, the result specifically implies that the posterior expectation of $\theta$ converges to its true value almost surely.  

> [!proposition] Proposition (Posterior Consistency).
> Suppose that [[Identifiability Assumption]] holds. Then there exists a set $\Theta^{\prime}\subseteq\Theta$ with $p(\Theta^{\prime})=1$ such that for every $\theta_{0}\in\Theta^{\prime}$, and every neighborhood $B$ of $\theta_{0}$,
>
> $$
> \lim_{ t \to \infty } \mathbb{P}(\theta \in B\mid  X_{1},X_{2},\dots X_{t}) = 1 \qquad P_{\theta_{0}}\text{-a.s.} 
>$$

^ml-prp-doobs-posterior-consistency

That is, for any prior distribution, the posterior belief is guaranteed to concentrate in a neighborhood of the true parameter $\theta$–except possibly on a set of parameter values that has measure zero under the agent's prior.

> ***if the truth is distinguishable, and you get enough data, you will eventually figure it out.*** *The true state lies in a tiny window around the actual truth.*

>[!remark] Remark.
>Consider $\Theta=\mathbb{R}$ where the agent's prior $p \in \Delta(\Theta)$ is a point mass at $\theta=0$. Then the posterior is also a point mass at zero, so the agent will fail to learn any parameter which is different from zero. But because the set $\mathbb{R}\setminus \{ 0 \}$ has a measure zero under the prior, the statement of the result holds in the trivial sense.

^ml-alias-doob-inconsistent-measure-zero
