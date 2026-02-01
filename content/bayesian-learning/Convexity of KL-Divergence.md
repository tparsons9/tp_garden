---
up: "[[= Kullback-Leibler Divergence for Relative Entropy]]"
aliases:
  - KL-Divergence is convex
tags:
  - concept/property
  - kl-divergence
---
>[!property] Property (KL Convexity).
>For any two pairs of distributions $(p,q)$ and $(p^{\prime},q^{\prime})$, and any scalar $\alpha \in [0,1]$, the [[= Kullback-Leibler Divergence for Relative Entropy|KL-Divergence]] has: 
>$$
>D(\alpha p+(1-\alpha)p^{\prime}\mid  \mid  \alpha q+(1-\alpha)q^{\prime})\leq \alpha D(p\mid  \mid  q)+(1-\alpha)D(p^{\prime}\mid  \mid  q^{\prime})
>$$

