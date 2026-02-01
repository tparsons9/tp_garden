---
up: "[[Blackwell Order]]"
aliases:
tags:
  - concept/definition
  - probability/method/dispersion
in:
  - "[[Courses]]"
  - "[[ECON 415-1]]"
---
Without the benefit of further information, the best expected payoff the agent can achieve is

$$
\sup _{a\in A}\mathbb{E}[u(a,\theta)]
$$

That is, without the signal and only using the prior. With the benefit of the signal, the agent can achieve an expected payoff of

$$
\sup _{\alpha:S\to A}\mathbb{E}[u(\alpha(s),\theta)] = \mathbb{E}\left[\sup _{a\in A}\mathbb{E}[u(a,\theta)\mid  s]\right]
$$

where $s$ denotes the realization of the signal. The inner expectation is conditional on the realization of $s$, with respect to uncertainty about $\theta$. The outer expectation is with respect to uncertainty about $s$, over the distribution of $s$.

One measure of the value of the signal is the difference in these expected payoffs,

> [!definition] Definition (Instrumental Value of SIgnal).
>  $$
> V_{\mathbf{D},p}(\sigma)\equiv \mathbb{E}\left[\sup _{a\in A}\mathbb{E}[u(a,\theta)\mid  s]\right] - \sup _{a\in A}\mathbb{E}[u(a,\theta)]
> $$
> where the first term is the maximum expected payoff _with_ the signal and the second is the maximum expected payoff _without the signal_;  $\mathbf{D}=(A,u)$ is the [[Decision Problems|decision problem]] and $p \in \Delta(\Theta)$ is the agent's prior.

^def-instrumental-value-of-signal

