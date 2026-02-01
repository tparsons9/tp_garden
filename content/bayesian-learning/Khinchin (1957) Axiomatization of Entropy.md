---
up: "[[Shannon Entropy]]"
aliases:
tags:
  - concept/theorem
  - micro/information
in:
  - "[[Courses]]"
  - "[[ECON 415-1]]"
---
The **Axiomatization of Entropy** forms the foundation for [[Shannon Entropy]].  It shows that the specific mathematical form of entropy is not arbitrary but is the *only* function that satisfies a few basic, intuitive properties we would expect from a measure of uncertainty.

>[!theorem] Theorem (Khinchin (1957)).
>Let $H(p_{1},\dots,p_{n})$ be a function defined for any $n \in \mathbb{Z}_{+}$ and for all values $p_{1},\dots,p_{n}$ satisfying $p_{i}\geq 0$ for each $i=1,\dots,n$ and $\sum_{i=1}^{n}p_{i}=1$. Then $H$ satisfies the [[Necessary and Sufficient Conditions for Shannon Entropy]] if, and only if, 
>$$
>H(p_{1},\dots,p_{n})=-\lambda \sum_{i=1}^{n} p_{i}\ln(p_{i})
>$$
>for some constant $\lambda>0$.

The _constant_ $\lambda$ corresponds to a scaling factor, which is determined by the choice of the logarithm's base[^1]

[^1]: Recalling that $\log_{b}(x) = (\log_{a}(x)) / \log_{a}(b)$ for any two bases $a,b>0$, changing the logarithm to a different basis simply rescales the measure. Choice of base $2$ and $e$ are both common. 
