---
up: "[[Bayesian Learning]]"
aliases:
tags:
---
Learning is modeled by having an agent observe an infinite sequence of signals $(X_{1},\dots)$ generated iid conditional on the true parameter $\theta$. The strong law of large numbers guarantees that along almost every sequence of signal realizations, the limiting fraction (or frequency) of observed signal outcomes converges to the actual probability of that outcome under the true parameter $\theta$. Once the true underlying distribution over the signals is revealed by the long-run frequencies, [[Bayes' Theorem|Bayes' Rule]] ensures that the agent's posterior probability assigned to the true parameter converges to $1$. 
## Setup

Let $(\Theta,d_{\Theta})$ be a complete separable metric space endowed with its Borel $\sigma$-algebra $\Sigma$, and let $p \in\Delta(\Theta)$ be a $\Sigma$-measurable probability measure on $\Theta$. Interpret $\theta \sim p$ as a unknown parameter of interest.

The space of signal realizations $(\mathcal{X},d_{X})$ is a complete separable metric space endowed with its Borel $\sigma$-algebra $\mathcal{B}$. There is an infinite sequence of signal realizations $X_{1},X_{2},\dots$ taking values in the set $\mathcal{X}^{\infty}=\mathcal{X}_{1}\times \mathcal{X}_{2}\times \dots$ where each $\mathcal{X}_{t}$ is a copy of $\mathcal{X}$. Conditional on the realized $\theta$, the signals $X_{1},X_{2},\dots$ are generated i.i.d. according to a conditional density $f_{\theta}$ and we refer to each $X_{t}$ as the period-$t$ signal.

The full state space is $\Omega=\Theta \times \mathcal{X}^{\infty}=\Theta \times \mathcal{X}_{1}\times \mathcal{X}_{2}\times\dots$ and equipped with the product $\sigma$-algebra $\Sigma \times \mathcal{B}_{1}\times \mathcal{B}_{2}\times\dots$ where each $\mathcal{B}_{t}$ is a copy of $\mathcal{B}$.

## Binary Example

Consider a single agent environment with $\theta \in \{ A,B \}$. Each period $t\in \mathbb{Z}_{+}$ is a signal realization from $\{ a,b \}$ generated iid according to

$$
\begin{matrix}
 & a & b \\
A & q & 1-q \\
B  & 1-q & q 
\end{matrix}
$$

where $q> \frac{1}{2}$.

>[!question]
>Will an agent who holds a prior belief that the probability of $A$ is $p \in (0,1)$ eventually learn the value of the parameter?

Suppose the first parameter is $\theta=A$, In which case signals are drawn IID according to $f_{A}=(q,1-q)$. For any infinite sequence $\mathbf{x}\in \{ a,b \}^{\infty}$, and any $t\in \mathbb{Z}_{+}$, let

$$
n_{t}(\mathbf{x})\equiv\#\{ 1\leq t^{\prime}\leq t:\mathbf{x}_{t^{\prime}}=a \}
$$

denote the number of $a$-realizations among the first $t$ realizations of $\mathbf{x}$. By the strong law of large numbers, there is a set $\mathcal{X}_{0}^{\infty}\subseteq \mathcal{X}^{\infty}$ of $P_{A}$-measure $1$ such that

$$
\lim_{ t \to \infty } \frac{n_{t}(\mathbf{x})}{t}=q\qquad \forall \mathbf{x}\in \mathcal{X}^{\infty}_{0}.
$$

The limiting fraction of $a$-realizations is $q$ along each sequence in $\mathcal{X}_{0}^{\infty}$. Since signals are assumed to be conditionally independent the agent's posterior belief about $A$ following any sequence $(x_{1},\dots,x_{t})$ depends only on the count of $a$ and $b$-realizations. Let $n$ denote the number of $a$-realizations. Then, applying Bayes' rule, the agent's posterior belief is

$$
\begin{aligned}
P(\theta=A\mid  x_{1},\dots,x_{t}) & = \frac{pq^{n}(q-q)^{t-n}}{pq^{n}(1-q)^{t-n}+(1-p)(1-q)^{n}q^{t-n}} \\
 & = \frac{1}{1+ \frac{1-p}{p}\left( \frac{1-q}{q} \right)^{2n-t}}
\end{aligned}
$$

along any $\mathbf{x}\in \mathcal{X}_{0}^{\infty}$, we have,

$$
\lim_{ t \to \infty } P(\theta=A\mid  x_{1},\dots,x_{t}) = \lim_{ t \to \infty } \left( 1 + \frac{1-p}{p}\left[ \left( \frac{1-q}{q} \right)^{2 \frac{n_{t}(\mathbf{x})}{t}-1} \right]^{t} \right)^{-1} = 1
$$

recalling that $q>1/2$ by assumption.

So the agent's posterior belief $P_{A}$-almost surely converges to certainty of the correct value of the parameter $A$. A symmetric argument shows that when the parameter is $B$, then the agent's posterior belief $P_{B}$-a.s. converges to certainty of $B$. Thus the agent (eventually) learns the parameter.