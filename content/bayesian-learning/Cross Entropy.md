---
up: "[[Information Theory]]"
aliases:
  - Relationship between Entropy and KL-Divergence
tags:
  - concept/result
  - micro/information
  - kl-divergence
---
>[!definition] Definition (Cross-Entropy).
>The cross-entropy of the distribution $q$ relative to the distribution $p$ over a given set is defined as: 
>$$
>H(p,q) = -\mathbb{E}_{p}[\log q]
>$$
>where $\mathbb{E}_{p}[\cdot]$ is the expected value operator with respect to distribution $p$. 

Cross-entropy measures the average number of bits needed to identify an event drawn from the same set when the coding scheme used for the set is optimized for an estimated [[Probability Distribution|probability distribution]] $q$, rather than the true distribution $p$. 

## Discussion 

### Relation to KL-Divergence

The definition can be formulated using [[= Kullback-Leibler Divergence for Relative Entropy|KL-Divergence]] $D_{KL}(p\mid \mid q)$, or the _relative entropy of_ $p$ with respect to $q$. 

$$
\begin{aligned}
H(p,q) & =H(p)+D_{KL}(p\mid  \mid  q)\\
\implies D(p\mid  \mid  q)& = \underbrace{ \left[ -\sum_{\theta\in \Theta} p(\theta)\ln q(\theta) \right] }_{ \text{Cross-entropy} } - H(p)
\end{aligned}
$$
This highlights the _direct and fundamental relationship between_ [[Shannon Entropy]] and KL-Divergence: [[Entropy measures the KL-Divergence from the Uniform Distribution]]. 
