---
up: "[[Information Theory]]"
aliases:
  - KL-Divergence
  - Relative Entropy
tags:
  - concept/definition
  - micro/information
in:
  - "[[Courses]]"
  - "[[ECON 415-1]]"
mathLink: $D(p\mid  \mid  q)=\sum_{\theta\in \Theta} p(\theta)\ln\left( \frac{p(\theta)}{q(\theta)} \right)$
---
The **Kullback-Liebler Divergence (KL Divergence)**, also known as _relative entropy_, quantifies how different two distributions are. 

>[!definition] Definition (KL-Divergence for Relative Entropy).
>Let $\Theta=\{ \theta_{1},\dots,\theta_{n} \}$ for any $n<\infty$ and let $p,q\in\Delta(\Theta)$. Then the **KL divergence** from $q$ to $p$ is 
> $$
> D(p\mid  \mid  q)=\sum_{\theta\in \Theta} p(\theta)\ln\left( \frac{p(\theta)}{q(\theta)} \right) = \mathbb{E}_{\theta \sim p}\left[ \ln\left( \frac{p(\theta)}{q(\theta)} \right) \right]
> $$
> where $0\ln0=0$. 

## Properties

>[!warning]
>KL-Divergence, is **NOT** (in-general) _symmetric_. 

- [[= Gibbs' Inequality]] (**Non-negativity**): $D(p\mid \mid q)\geq 0$ for all $p,q\in\Delta(\Theta)$, with equality if and only if $p=q$
- **Additivity for Independent Distributions**: [[= Additivity of KL-Divergence for Independent Distributions]] 
- **Convexity:** [[Convexity of KL-Divergence|KL-Divergence is convex]]

![[= Kullback-Leibler Divergence for Relative Entropy-1763555258515.webp]]
