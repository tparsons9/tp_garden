---
up: "[[Shannon Entropy]]"
aliases:
tags:
  - concept/result
  - micro/information
  - kl-divergence
in:
  - "[[Courses]]"
  - "[[ECON 415-1]]"
---
By [[= Gibbs' Inequality#^9cc265|Gibbs' Inequality>Corollary (Information Entropy Bound): $H(p)\leq \log n$]], the [[Shannon Entropy|entropy]] of a distribution $p \in \Delta(\Theta)$ with $n\equiv \lvert \Theta \rvert<\infty$ can be written directly in terms of KL-Divergence as
$$
H(p)= \ln n - D(p\mid  \mid  \mathcal{U})
$$
where $\mathcal{U}$ denotes the uniform distribution on $\Theta$. 

The larger the KL-divergence from the uniform distribution to $p$, the _lower the entropy of p_. To see this, observe that, 

$$
\begin{aligned}
\ln n - D(p\mid  \mid  \mathcal{U}) & = \ln n-\sum_{\theta\in \Theta} p(\theta)\ln\left( \frac{p(\theta)}{1 / n} \right) \\
 & = \sum_{\theta\in \Theta} p(\theta)(\ln n-\ln(np(\theta)))\qquad \text{since }\sum_{\theta\in \Theta}p(\theta)=1 \\
 & = -\sum_{\theta\in \Theta} p(\theta)\ln(p(\theta)) = H(p) 
\end{aligned}
$$
This result provides the justification for the property of [[= Shannon entropy is maximized at the Uniform Distribution|entropy is maximized at the Uniform distribution]]. 

>[!rocket] Intuition
>$\ln n$ is the entropy of the uniform distribution $H(\mathcal{U})$, and further forms the [[= Gibbs' Inequality#^9cc265|upper bound for information entropy]]. It is the **maximum possible entropy** for the state space. 
>
>$D(p\mid \mid \mathcal{U})$ measures how _"different"_ the distribution $p$ is from the uniform distribution $\mathcal{U}$. So the formula for entropy can then be read as,
>$$
> H(p) = \text{Max. Possible Entropy} - \text{Distance of }p\text{ from Uniformity}
>$$

A distribution $p$ has **low-entropy** precisely because it is **far** (in the KL-sense) from the uniform distribution, and one has high-entropy when it is "close" to uniform. 

For a related discussion, see [[Cross Entropy]]. 