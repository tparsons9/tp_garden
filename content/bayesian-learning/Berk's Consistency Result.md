---
up: "[[Model Uncertainty and Misspecification under Bayesian Learning]]"
aliases:
tags:
  - concept/proposition
  - bayes/learning
---
This theorem, which governs learning in misspecified environments, states that if an agent's model is misspecified (i.e., they assign zero probability to the true distribution $\theta ^{\ast}$), their beliefs will eventually concentrate on the parameter $\theta$ in their support the **minimizes the KL-divergence** $D(f_{\theta ^{\ast}}\mid \mid f_{\theta})$ to the true distribution. 

From the discussion on [[Misspecified Beliefs Converge to the KL-Minimizing Parameter]], we showed that [[Doob's Consistency Theorem]] no longer applies if the true parameter $\theta ^{\ast}$ is outside the agent's set of possible beliefs (i.e., $P_{\theta ^{\ast}}$ falls in the $P$-measure zero set on which consistency is not guaranteed).

However, the limiting belief presented in the discussion is still useful, even when $\theta ^{\ast}$ has _zero probability under the agent's prior_. Specifically, when,

$$
D_{KL}(f_{\theta ^{\ast}}\mid  \mid  f_{A})<D_{KL}(f_{\theta ^{\ast}}\mid  \mid  f_{B})
$$

then $(\dagger)$ converges to $1$ as $t\to \infty$, and to $0$ for the reverse inequality. So the agent's beliefs concentrate on the parameter that induces a distribution over signals that is closest in [[= Kullback-Leibler Divergence for Relative Entropy|KL-Divergence]] to the true distribution.

Berk (1966) establishes the result generally. 

## Statement 

Formally, assume the observed signals are drawn iid according to the density $f_{\theta ^{\ast}}$ with $P_{\theta ^{\ast}}$ denoting the induced measure on $\mathcal{X}^{\infty}$, as defined in [[Bayesian Learning]]. Assume that $\Theta$ is finite.

> [!proposition] Proposition (Berk (1966)).
> Let
>
> $$
> A\equiv \argmin_{\theta \in \text{Supp}(P)} \,D(f_{\theta ^{\ast}}\mid  \mid  f_{\theta})
>$$
>
>be the set of parameters in the support of the agent's prior that minimize KL-divergence to the true distribution. Then,
>
> $$
> \lim_{ t \to \infty } P(A\mid  X_{1},\dots,X_{t})=1\qquad P_{\theta ^{\ast}}\text{-a.s.} 
>$$

The proposition states that the posterior probability of this set $A$ converges to $1$ almost surely, relative to the true measure $P_{\theta ^{\ast}}$. It provides a foundational theorem for **asymptotic learning** under [[Model Uncertainty and Misspecification under Bayesian Learning#Model Misspecification|Model Misspecification]].

## Discussion

The [[Berk-Nash Equilibrium]] adapts the idea of [[Asymptotic Agreement of Beliefs|asymptotic learning convergence]] as driven by KL-divergence and Berk's Consistency Result, into a definition of rational, internally consistent behavior in a strategic setting, even when agent's subjective models are incorrect. 

### Comparison to Doob's Theorem

In the classical Bayesian learning model, if the true parameter $\theta ^{\ast}$ is within the set of possible parameters (i.e., the support of the prior), the agent is guaranteed to learn the true parameter almost surely by [[Doob's Consistency Theorem]].

Berk (1966) addressed the situation where the agent's subjective model rules out the true data-generating process. This result establishes that even when misspecified, an agent's beliefs will still converge, *but not necessarily to the truth*. Instead, the agent's posterior belief concentrates on the parameter $\theta$ within their prior's support that minimizes the KL-divergence from the true distribution $f_{\theta ^{\ast}}$ to the subjective distribution $f_{\theta}$.

The result replaces the strong guarantee of convergence to the truth with a convergence to the "best fitting" model available to the agent, defined by KL-divergence. This provides the mechanism of explaining how agents with fixed/flawed models rationalize observed data: they select the model that minimizes informational distance from reality. See [[Dogmatism as a critique of Bayesian Learning]] for more on this problem.
