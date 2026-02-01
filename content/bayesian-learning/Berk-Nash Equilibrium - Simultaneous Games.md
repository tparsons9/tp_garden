---
up: "[[Berk-Nash Equilibrium]]"
aliases:
tags:
  - concept/definition
---

> [!definition] Definition (Berk-Nash Equilibrium - Simultaneous-move Games).
> A strategy profile $\sigma$ is a Berk-Nash equilibrium if for all players $i$, there exists a $\mu_{i}\in\Delta(\Theta_{i})$ such that
> 1. $\mu_{i}\in\Delta(\Theta_{i}(\sigma))$; that is, $\mu$ has support on the set of KL-minimizers
> 2. $\sigma_{i}$ is optimal given $\mu_{i}$. Namely, $\sigma_{i}(a_{i}\mid s_{i})>0$ implies that
>
> $$
>    a_{i}\in \argmax_{\bar{a}_{i}\in \mathbb{A}_{i}}\, \mathbb{E}_{\overline{Q}_{\mu_{i}}^{i}(\cdot\mid  s_{i},\bar{a}_{i})}[u_{i}(\bar{a}_{i},Y_{i})]
>    $$
>
> where $\overline{Q}_{\mu_{i}}^{i}(\cdot\mid s_{i},\bar{a}_{i})=\int_{\Theta_{i}}Q_{\theta_{i}}^{i}(\cdot\mid s_{i},a_{i})\mu_{i}(\theta_{i})\,d\theta_{i}$ is the distribution over consequences of player $i$ conditional on $(s_{i},a_{i})\in \mathbb{S}_{i}\times \mathbb{A}_{i}$, induced by $\mu_{i}$

>[!remark] Remark.
>The definition is equivalent to Nash equilibrium when $(1)$ is replaced with the condition that players have correct beliefs; i.e., $\overline{Q}_{\mu_{i}}^{i}= Q_{\sigma}^{i}$.



### Setup

As before, take the set of payoff-relevant states $\Omega$, but now consider a set of players $\mathcal{I}$ with
- Signal profiles $\mathbb{S}= \times_{i}\mathbb{S}_{i}$, action profiles $\mathbb{A}=\times_{i}\mathbb{A}_{i}$, and consequence profiles $\mathbb{Y}=\times_{i}\mathbb{Y}_{i}$
- probability distribution $p$ over $\Omega \times \mathbb{S}$ whose marginals have full support
- A profile of **feedback functions** $f=(f_{i})_{i \in \mathcal{I}}$ where each $f_{i}:\mathbb{A}\times\Omega\to \mathbb{Y}_{i}$
- Payoff function $u_{i}:\mathbb{A}_{i}\times \mathbb{Y}_{i}\to \mathbb{R}$

Here the timing of the *game* is as follows: First, the state and signal $(\omega,s)$ are drawn according to $p$. Then, each player $i$ **privately** observes their own signal $s_{i}$ and chooses action profile $a_{i}$. The profile of consequences determined via $f$ as a function of the action profile and the state, and payoffs, are realized.

### Definitions

For any player $i$, action $a_{i}\in \mathbb{A}_{i}$, and consequence $y_{i}\in \mathbb{Y}_{i}$, let

$$
\Lambda^{i}(a_{i},y_{i})=\{ (\omega,a_{-i}):f_{i}(a_{i},a_{-i},\omega)=y_{i} \}
$$

be the state and opponent action profiles that induce consequence $y_{i}$ given player $i$'s choice of $a_{i}$. The objective *distribution* over player i's consequences is $Q_{\sigma}^{i}: \mathbb{S}_{i}\times \mathbb{A}_{i}\to\Delta(\mathbb{Y}_{i})$, where

$$
Q_{\sigma}^{i}(y_{i}\mid  s_{i},a_{i}) = \sum_{(\omega,a_{-i})\in \Lambda^{i}(a_{i},y_{i})} \,\sum_{s_{-i}\in S_{-i}}\left( \prod_{j\neq i}\sigma^{j}(a^{j}\mid  s ^{j}) \right)\cdot p_{\Omega \times \mathbb{S}_{-i}\mid  \mathbb{S}_{i}}(\omega,s_{-i}\mid  s_{i}) 
$$

This is the conditional distribution over consequences that a Bayesian agent with knowledge of $f$, the strategy profile $\sigma$, and the signal realization $s_{i}$ would expect.

The subjective model $\mathcal{Q}=\langle \Theta,\ (Q_{\theta})_{\theta \in\Theta} \rangle$ with $\Theta=\prod_{i \in \mathcal{I}}\Theta^{i}$ and $Q_{\theta}=(Q_{\theta}^{i})_{i\in \mathcal{I}}$ describes the set of distributions over consequences that each player considers possible. Each player's parameter set $\Theta_{i}$ indexes distributions $Q_{\theta_{i}}^{i}:\mathbb{S}_{i}\times \mathbb{A}_{i}\to\Delta(\mathbb{Y}_{i})$.

> [!definition] Definition (Correctly-specified Game).
> A game is correctly specified given $\sigma$ if, for all players $i$, there exists $\theta_{i}\in\Theta_{i}$ such that $Q_{\theta_{i}}^{i}(\cdot\mid s_{i},a_{i})=Q_{\sigma}^{i}(\cdot\mid s_{i},a_{i})$ for all $(s_{i},a_{i})\in \mathbb{S}_{i}\times \mathbb{A}_{i}$; otherwise the game is misspecified given $\sigma$. A game is correctly specified if it is correctly specified for all $\sigma$; otherwise it is misspecified.

For any strategy profile $\sigma$, define,

$$
\begin{aligned}
q_{\sigma_{i}}(s_{i},a_{i}) & \equiv\sigma_{i}(a_{i}\mid  s_{i})p_{S_{i}}(s_{i}) \\
K_{i}(\sigma,\theta_{i}) & = \sum_{(s_{i},a_{i})\in \mathbb{S}_{i}\times \mathbb{A}_{i}} \left( \mathbb{E}_{Q_{\sigma}^{i}(\cdot\mid  s_{i},a_{i})}\left[ \ln \frac{Q_{\sigma}^{i}(Y_{i}\mid  s_{i},a_{i})}{Q_{\theta_{i}}^{i}(Y_{i}\mid  s_{i},a_{i})} \right]  \right)\,q_{\sigma_{i}}(s_{i},a_{i})
\end{aligned}
$$

where $K_{i}(\sigma,\theta_{i})$ is the expected [[= Kullback-Leibler Divergence for Relative Entropy|KL-Divergence]] from $Q_{\theta_{i}}(\cdot\mid s_{i},a_{i})$ to the objective distribution $Q_{\sigma}^{i}(\cdot\mid s_{i},a_{i})$, weighting $(s_{i},a_{i})$ pairs according to $q_{\sigma_{i}}(s_{i},a_{i})$.

The set of closest parameters is

$$
\Theta_{i}(\sigma)= \argmin_{\theta_{i}\in\Theta_{i}}\,\  K_{i}(\sigma,\theta_{i})
$$
## Examples

