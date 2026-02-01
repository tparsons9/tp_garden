---
up: "[[Value of a Signal (Kamenica-Gentzkow)]]"
aliases:
tags:
  - proof
---

$\textit{Proof.}$
$(2)\implies(1)$ is immediate. $(2)\implies (3)$ follows from the fact that [[Beliefs are a Martingale|every signal induces a Bayes-plausible distribution over posterior beliefs]]. 

To show $(1)\implies(2)$, observe that for any signal $\sigma:\Theta\to\Delta(S)$ with value $v^{\ast}$, we can define a new signal $\tilde{\sigma}:\Theta\to\Delta(A)$ mapping types into the recommended action under $\sigma$. That is,
$$
\tilde{\sigma}(a\mid  \theta)= \sum_{s:\hat{a}(\mu_{S})=a} \sigma(s\mid  \theta)
$$
for every $a\in A,\ \theta \in\Theta$, where $\mu_{S}$ denotes the Receiver's posterior given signal realization $s$ under $\sigma$.

Clearly, the optimal action given recommendation of $a$ remains the action $a$, so the distribution of optimal actions induced by $\tilde{\sigma},\ \sigma$ are the same. 

$(3)\implies(1)$ follows immediately from [[Bayes-plausible distributions induced by a signal|every Bayes-plausible distribution over posterior beliefs can be induced by a signal]], but we need to show that it is possible to construct a *finite-valued signal* for arbitrary $\tau$ (even ones with infinite support).

Fix any $v^{\ast}$ and [[Bayes' Plausible]] $\tau$ such that $\mathbb{E}_{\tau}[\hat{v}(\mu)]=v^{\ast}$, and define
$$
C=\{ (\mu,\hat{v}(\mu))\mid  \mu \in\Delta(\Theta) \}
$$
to be the set of all beliefs and valuations of those beliefs, noting that $C\subseteq \mathbb{R}^{n}$ where $n\equiv |\Theta|$. [^1] Moreover, by assumption that $v^{\ast}=\mathbb{E}_{\tau}[\hat{v}(\mu)]$ for some Bayes-plausible distribution $\tau$ over posterior beliefs, the vector $(\mu_{0},\ v^{\ast})$ belongs to the convex hull of $C$. 

Then, by [[Caratheodory's Theorem of Convex Hull|Caratheodory's Theorem]], there exists a sequence of beliefs $(\mu_{i})^{n+1}_{i=1}$ and a sequence of nonnegative weights $(\alpha_{i})^{n+1}_{i=1}$ summing to $1$ such that 
$$
(\mu_{0},v^{\ast})= \sum_{i=1}^{n+1} \alpha_{i}\cdot(\mu_{i},\  \hat{v}(\mu_{i}))
$$
Let $t^{\ast}$ be the distribution over posterior beliefs that assigns probability $\alpha_{i}$ to each belief $\mu_{i}$, $1\leq i\leq n+1$. Then, 
$$
\mathbb{E}_{\tau ^{\ast}}[\hat{v}(\mu)] = \sum_{i=1}^{n+1} \alpha_{i}\cdot \hat{v}(\mu_{i}) = v^{\ast}
$$

$\Box$



---
[^1]: The simplex $\Delta(\Theta)\subseteq \mathbb{R}^{n-1}$ and the valuation belongs to $\mathbb{R}$, hence $C\subseteq \mathbb{R}^{n}$.
