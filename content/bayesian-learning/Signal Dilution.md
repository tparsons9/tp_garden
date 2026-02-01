---
up: "[[Signal Dispersion and Informativeness]]"
aliases:
tags:
  - concept/definition
  - micro/information
---
> [!definition] Definition (Diluting Signals).
> For any signal $\sigma$, the $\alpha$-**dilution** of $\sigma$ $(\alpha\cdot\sigma)$ is a signal where, 
> - the realization of $\sigma$ is observed with probability $\alpha$
> - otherwise, a completely **uninformative** signal is observed. 
>   
>   Formally, $\alpha\cdot\sigma$ is the map from $\Theta$ to $S\cup \{ \emptyset \}$ where the signal outcome $\emptyset$ has a constant $1-\alpha$ probability at every state $\theta \in\Theta$, and the remaining probability is assigned to $S$ in proportion to $\sigma$. 

Intuitively, a signal $\sigma_{\alpha}$ is an $\alpha$-dilution of $\sigma$ if $\sigma_{\alpha}$ [[Signal-induced Belief Distribution|induces the distribution over posterior beliefs]] $\tau_{\sigma_{\alpha}}=\alpha \tau_{\sigma}+(1-\alpha)\delta_{p}$, where $\tau_{\sigma}$ is the distribution induced by the original signal, and $\delta_{p}$ is the [[Degenerate Distributions|degenerate distribution]] with a point mass on [[Prior Probability|prior]] $p$. 

The resulting distribution $\tau_{\sigma_{\alpha}}$ is a convex combination or mixture of these two distributions. The $\alpha$-dilution thus means that the information content of $\sigma$ is literally reduced/diluted by the probability $(1-\alpha)$ that the agent remains uninformed. See 