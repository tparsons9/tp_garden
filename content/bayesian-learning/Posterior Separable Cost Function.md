---
up: "[[Information Costs]]"
aliases:
  - PS Cost Function
tags:
  - concept/definition
  - micro/information
---
A cost function $C:\mathcal{S}\to \mathbb{R}$ is **posterior separable** if the total cost can be written as the expected value of a cost function that depends on the *realization* of the posterior $q$. Formally,

> [!definition] Posterior Separable (PS) Cost Function
> A cost function is posterior separable if there exists a family of convex functions $(\Phi_p)_{p \in \Delta(\Theta)}$ such that
>
> $$
> C(p,\tau)= \mathbb{E}_{q\sim \tau}[\Phi_{p}(q)]
> $$
>
> where, for every prior $p \in \Delta(\Theta)$, the function $\Phi_{p}:\Delta(\Theta)\to \mathbb{R}$ satisfies
> 1. **Convexity**: $\Phi_{p}$ is convex
> 2. **Weak Positivity:** $\Phi_{p}(q)\geq 0$ for all $q$
> 3. **Zero at Prior:** $\Phi_{p}(p)=0$ ([[Zero Cost of No Information]])

The $(3^{\text{rd}})$ condition (**Zero at Prior**) formalizes the idea that the cost of "learning" the prior is zero.

---

> [!insight] Intuition & Tractability
> This specification is analytically convenient. The agent's problem of choosing a signal $\sigma$ (which induces $\tau_{\sigma}$) To maximize their expected utility, net of costs, can be rewritten as
>
> $$
> \max_{\tau_{\sigma}} \int_{\Delta(\Theta)}\left( \max_{a \in A}\mathbb{E}_{q}[u(a,\  \theta)] - \Phi_{p}(q) \right) \,d\tau_{\sigma}(q)
> $$
>
> This frames the problem as choosing an optimal distribution of posteriors, $\tau_{\sigma}$, to optimize the expectation of a net utility function $\mathbb{E}_{q}[u(a,\theta)]-\Phi_{p}(q)$. 

The [[Uniformly Posterior Separable Cost Function]] is a stricter and very common sub-class of PS costs. [[Prior-Independent Cost is a Weighted Sum of KL-Divergences (PST 2020)]] is also a member of this class. 

