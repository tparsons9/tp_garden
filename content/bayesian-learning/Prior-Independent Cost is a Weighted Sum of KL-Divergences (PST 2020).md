---
up: "[[Prior-Independent Information Costs]]"
aliases:
tags:
  - micro/information
  - concept/theorem
---
> [!proposition] Proposition (PriorIndependent Costs as sum of KL-divergence).
> The cost function $C:\mathcal{E}\to \mathbb{R}$ satisfies [[Axioms for Prior-independent Information Cost (PST 2020)|Axioms 1-4]] if and only if there exists a unique collection of $\mathbb{R}_{+}$-valued parameters $(\beta_{\theta,\theta^{\prime}})_{\theta,\theta^{\prime}\in\Theta}$ such that
>
> $$
> \sum_{\theta,\theta^{\prime}\in \Theta} \beta_{\theta,\theta^{\prime}} \times \underbrace{ \int_{S} \ln \frac{d\sigma_{\theta}(s)}{d\sigma_{\theta^{\prime}}(s)}d\sigma_{\theta}(s)  }_{ \text{KL-divergence }\sigma(\cdot\mid  \theta^{\prime})\to\sigma(\cdot\mid  \theta) }
>$$

As discussed in [[= Kullback-Leibler Divergence for Relative Entropy|KL-Divergence]], the KL-divergence from $\sigma(\cdot\mid \theta^{\prime})$ to $\sigma(\cdot\mid \theta)$ is a measure of how different the distributions are. The larger the difference, the easier it is to reject the hypothesis that the state is $\theta^{\prime}$ when it is truly $\theta$.

>[!remark]
>[[Continuity of information cost functions with respect to PST pseudo-metric|Axiom 4]] can be dispensed with if $\Theta=\{ \theta_{0},\theta_{1} \}$, in which case the Proposition simplifies to the statement that $C$ satisfies Axioms 1-3 if and only if there exist parameters $\beta_{01},\beta_{10}\geq 0$ such that
>
> $$
> C(\sigma)=\beta_{01}D(\sigma(\cdot\mid  \theta_{0})\mid  \mid  \sigma(\cdot\mid  \theta_{1}))+ \beta_{10}D(\sigma(\cdot\mid  \theta_{1})\mid  \mid  \sigma(\cdot\mid  \theta_{0})) 
>$$

A notable contrast with [[Entropy Reduction Cost is Expected KL Divergence]] is that this cost function permits differentiation between states.

Finally, the class of [[Prior-Independent Information Costs]] belongs to the [[Posterior Separable Cost Function]] class, though it is not [[Uniformly Posterior Separable Cost Function]]. The following justifies this in that the proposition does not presuppose that the agent is Bayesian and has a prior belief over the state space. 

>[!remark] Remark (Prior-Independent KL-Divergence Cost is [[Posterior Separable Cost Function|Posterior Separable]]). 
>If the agent has a prior $p$, then the cost of the [[Signal-induced Belief Distribution|signal that induces the distribution]] $\tau$ over posterior belief's can be restated as,
> $$
> \mathbb{E}_{q\sim \tau}[\Phi_{p}(q)] 
>$$
> where
> $$
> \Phi_{p}(q) = \Phi(p) - \sum_{\theta,\theta^{\prime}\in \Theta} \beta_{\theta,\theta^{\prime}} \frac{q_{\theta}}{p_{\theta}}\ln\left( \frac{q_{\theta}}{q_{\theta}^{\prime}} \right) 
>$$

^e8b373


