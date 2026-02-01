---
up: "[[Bayesian Learning]]"
aliases:
tags:
  - concept/definition
  - bayes/learning
  - statistics/asymptotics
mathLink-blocks:
  ml-def-asymptotic-agreement-beliefs: $P^{i}(\phi_{\theta,\infty}^{1}=\phi_{\theta,\infty}^{2}) = 1$
---
Asymptotic agreement is the idea that if two agents observe the same infinite stream of data, their beliefs will eventually converge to be identical. Formally, 

## Definitions 

For any infinite sequence $\mathbf{x}\in \mathcal{X}^{\infty}$, write

$$
\phi_{\theta,t}^{i}\equiv P^{i}(\theta\mid  x_{1},\dots,x_{t})
$$

for the posterior probability that agent $i$ assigns $\theta$ following the first $t$ realizations of the sequence $\mathbf{x}$. Further define,

$$
\phi_{\theta,\infty}^{i}(\mathbf{x})= \lim_{ t \to \infty } \phi_{\theta,t}^{i}(\mathbf{x})
$$

to be the asymptotic posterior probability that agent $i$ assigns to $\theta$ along the sequence $\mathbf{x}$.

> [!definition] Definition (Asymptotic Agreement).
> Say that **asymptotic agreement** occurs if, for each agent $i$,
>
> $$
> P^{i}(\phi_{\theta,\infty}^{1}=\phi_{\theta,\infty}^{2}) = 1\qquad \forall \theta \in\Theta
>$$
>
>that is, both agents believe their asymptotic beliefs will be identical.

^ml-def-asymptotic-agreement-beliefs

>[!insight] Intuition
>As $t\to \infty$, the observed data perfectly reveals the true frequencies, and if the parameter has [[Identifiability Assumption]] then everyone will be forced by the data to arrive at the same correct conclusion, regardless of their different priors. 



When agents hold a [[Dogmatism as a critique of Bayesian Learning|dogmatic belief]] about the signal-generating distribution, asymptotic agreement occurs whenever the parameter is identified ([[Doob's Consistency Theorem#^ml-prp-doobs-posterior-consistency]]). But this can fail when an arbitrarily small amount of model uncertainty is introduced (see [[Failure of Asymptotic Agreement in Learning]]).