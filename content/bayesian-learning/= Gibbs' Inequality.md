---
up:
aliases:
  - information entropy of a distribution is less than or equal to its cross entropy with any other distribution
tags:
  - concept/definition
  - probability/method
related: "[[= Kullback-Leibler Divergence for Relative Entropy]]"
---
**Gibbs' inequality** is a statement about the information entropy of a discrete [[Probability Distribution]], or, the information entropy for a distribution $P$ is less than or equal to its cross entropy for any other distribution $Q$. Formally, 

>[!definition] Definition (Gibbs' Inequality).
>Suppose that $P=\{ p_{1},\dots,p_{n} \}$ and $Q=\{ q_{1},\dots,q_{n} \}$ are discrete probability distributions. Then,
>$$
>-\sum_{i=1}^{n} p_{i}\log p_{i}\leq -\sum_{i=1}^{n} p_{i}\log q_{i}
>$$
>with equality if and only if $p_{i}=q_{i}$ for $i=1,\dots,n$. 
>
>The difference between two quantities is the [[= Kullback-Leibler Divergence for Relative Entropy|KL-Divergence]], so the inequality can also be written as,
>$$
>D_{KL}(P\mid  \mid  Q)\equiv \sum_{i=1}^{n} p_{i}\log \frac{p_{i}}{q_{i}}\geq 0.
>$$

An important corollary relates the [[= Shannon entropy is maximized at the Uniform Distribution|Maximal Value property of Entropy]] to its bounds: 

>[!corollary] Corollary (Information Entropy Bound).
>The entropy of $P$ is bounded by 
>$$
>H(p_{1},\dots,p_{n})\leq \log n
>$$
>where the bound is achieved when $q_{i}=1 / n$ for all $i$. That is [[= Shannon entropy is maximized at the Uniform Distribution|entropy is maximized at the Uniform distribution]]. 

^9cc265

