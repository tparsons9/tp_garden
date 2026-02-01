---
up: "[[Model Uncertainty and Misspecification under Bayesian Learning]]"
aliases:
tags:
  - concept/result
---
From the standard mode, [[Asymptotic Agreement of Beliefs]] says that if agents start with different priors, but see the same data, their beliefs will eventually converge. 

The following result shows that this result is not robust; introducing an *arbitrarily small amount of [[Model Uncertainty and Misspecification under Bayesian Learning#Model Uncertainty|model uncertainty]]* can cause this agreement to fail completely. 

## Acemoglu, Chernozhukov and Yildiz (2015)

### Setup

Let $\Theta=\{ A,B \}$ with each agent's prior about the parameter denoted by $\pi^{i}\equiv(\pi_{A}^{i},\ \pi_{B}^{i})$. Agent $i$ believes that the signals are generated iid from the set $\{ a,b \}$ with state-dependent distribution,

$$
\begin{matrix}
 & a & b \\
A & \gamma & 1-\gamma \\
B & 1-\gamma & \gamma 
\end{matrix}
$$

where $\gamma$ unknown and distributed according to $G^{i}$ with density,

$$
g^{i}(\gamma)= \begin{cases}
\varepsilon+ \frac{1-\varepsilon}{\lambda} & \text{if }\gamma \in (\gamma^{i}-\lambda / 2,\  \gamma^{i}+\lambda / 2) \\
\varepsilon & \text{otherwise}  
\end{cases}
$$

for some $\gamma^{i}> \frac{1}{2}$. Assume that $\gamma^{1}\neq\gamma^{2}$. The density is depicted as,

![[Chapter 7 Model Uncertainty and Mispecification-1762645116407.webp]]

The limit as $\varepsilon\to 0$ and $\lambda \to 0$ returns the model in which each agent $i$ [[Dogmatism as a critique of Bayesian Learning|dogmatically]] believes that the signal structure to be given by

$$
\begin{matrix}
 & a & b \\
A & \gamma^{i} & 1-\gamma^{i} \\
B  & 1-\gamma^{i} & \gamma^{i}
\end{matrix}
$$

Where, at this limit, asymptotic agreement holds.

Now suppose that $\varepsilon,\ \lambda>0$ with $\lambda$ small ($\lambda<|\gamma^{1}-\gamma^{2}|$) and suppose that $\gamma^{i}- \frac{\lambda}{2}> \frac{1}{2}$ for each agent $i$. As in [[Sequential Signal Model]], define

$$
n_{t}(\mathbf{x})\equiv\#\{ 1\leq t^{\prime}\leq t:\mathbf{x}_{t^{\prime}}=a \},\  \qquad \forall \mathbf{x}\in \mathcal{X}^{\infty}
$$

to be the count of $a$-realizations among the first $t$ realizations of $\mathbf{x}$, and let

$$
\rho(\mathbf{x})= \lim_{ t \to \infty } \frac{n_{t}(\mathbf{x})}{t}\,\qquad\forall \mathbf{x}\in \mathcal{X}^{\infty}
$$

be the **asymptotic frequency** of the $a$-realizations among $\mathbf{x}$.

>[!tip]- Intuition 1.
>The "accuracy" of the signal is governed by the unknown parameter $\gamma$. The two agents have different beliefs for what $\gamma$ is. 
>
>Their priors, $g^{i}(\gamma)$, are modeled as a "spike" around their "pet theory" $(\gamma^{i})$ and a tiny/flat background level of $\varepsilon$ everywhere else. The $\varepsilon$ term represents their model uncertainty.

### How Agents Learn

The following lemma provides a simple expression for the agent's asymptotic belief on the set of sequence $\widetilde{\mathcal{X}}^{\infty}\subseteq \mathcal{X}^{\infty}$ where the limiting frequency exists $(\rho(\mathbf{x})<\infty)$.

> [!lemma] Lemma (Acemoglu, Chernozhukov and Yildiz (2015)).
> For every sequence $\mathbf{x}\in \widetilde{\mathcal{X}}^{\infty}$,
>
> $$
> \phi_{A,\infty}^{i}(\mathbf{x})= \left( 1 + \frac{1-\pi_{A}^{i}}{\pi^{i}_{A}}\cdot \frac{f_{B}^{i}(\rho(\mathbf{x}),\  1-\rho(\mathbf{x}))}{f^{i}_{A}(\rho(\mathbf{x}),\  1-\rho(\mathbf{x}))} \right) ^{-1} 
>$$
>
> where the second fraction is the asymptotic likelihood ratio under $i$'s subjective model.

This ratio can be simplified to,

$$
\frac{f_{B}^{i}(\rho,\  1-\rho)}{f_{A}^{i}(\rho,\  1-\rho)} = \frac{g^{i}(1-\rho)}{g^{i}(\rho)}
$$

taking on either of three possible values. For any $\rho \in\left( \gamma^{i}-\frac{\lambda}{2},\ \gamma^{i}+ \frac{\lambda}{2} \right)$,

$$
\frac{g^{i}(1-\rho)}{g^{i}(\rho)} = \frac{\varepsilon\lambda}{1-\varepsilon(1-\lambda)}
$$

which converges to zero as $\varepsilon$ and $\lambda$ grow small (implying that $\phi_{A,\infty}^{i}\to1$). By a mirror argument, if the limiting frequency of $a$-realizations is some $\rho \in\left( 1-\gamma^{i}-\frac{\lambda}{2},\ 1-\gamma^{i}+ \frac{\lambda}{2} \right)$, then

$$
\frac{g^{i}(1-\rho)}{g^{i}(\rho)} = \frac{1-\varepsilon(1-\lambda)}{\varepsilon\lambda}
$$

which converges to $\infty$ as $\varepsilon,\ \lambda\to 0\implies \phi_{A,\infty}\to 0$. For all other limiting frequencies, the asymptotic likelihood ratio is simply $\frac{g^{i}(1-\rho)}{g^{i}(\rho)}=1$. These are considered possible but uninformative about the parameter.

>[!tip]- Intuition 2.
>Both agents observe the *same* infinite sequence of signals $\mathbf{x}$. They define the long-run frequency of $a$-signals which we call $\rho(\mathbf{x})$. 
>
>Using this observed frequency $\rho$ to figure out the true state $\theta$. Their final belief depends on the ratio. The agent updates their belief based on how likely $\rho(x)$ is different under different states $\theta$. 

### Source of Disagreement 

Applying the lemma, the following depicts agent $i$'s asymptotic posterior as a function of the limiting signal frequency.

![[Chapter 7 Model Uncertainty and Mispecification-1762645953127.webp]]

As $\varepsilon\to 0$ and $\lambda\to 0$, each agent $i$ is increasingly sure that the limiting frequency $\rho$ will either be close to $\gamma^{i}$ or $1-\gamma^{i}$, so he believes that he will (approximately) learn the parameter. But, when a sequence of signals has a long-run frequency that leads agent $1$ to learn $\theta=A$ or $\theta=B$, agent $1$ knows that this sequence has led agent $2$ to consider the signal uninformative, in which case agent $2$'s limiting belief is the same as his prior. Likewise in the reverse case.

So not only does asymptotic agreement fail, but we have the stronger conclusion that the limiting beliefs $\phi^{1}_{\infty},\ \phi^{2}_{\infty}$ are different on ***all*** sample paths. The figure below depicts $\lvert \phi_{A,\infty}^{1}-\phi_{A,\infty}^{2} \rvert$ as a function of the limiting signal frequency.

![[Chapter 7 Model Uncertainty and Mispecification-1762646226366.webp]]

>[!question]- Why They Disagree Forever.
>Say that the frequency of $a$-signals is $\rho(\mathbf{x})=0.7$. 
>
>Agent $1$ sees $\rho=0.7$ with $\gamma^{1}=0.7$. He thinks that the data strongly supports his theory that $\gamma=0.7$ by the high frequency of $a-$signals. Thus, his belief converges to $1$, $\phi_{A,\infty}^{1}\to 1$, becoming certain the state is $A$. 
>
>Agent $2$ sees the same $\rho=0.7$, but their pet theory of $\gamma^{2}=0.8$ causes some uncertainty, the data must have come from that tiny 'elsewhere' probability $\varepsilon$. Because $\rho$ is not near $\gamma^{2}$ or $1-\gamma^{2}$, the asymptotic likelihood ratio is $\frac{\varepsilon}{\varepsilon}=1$. Hence the data is **completely uninformative** and his posterior belief $\phi_{A,\infty}^{2}=\pi_{A}^{2}$ his prior. 
>
>**Result:** on the exact same set of of data, Agent 1 becomes certain of state $A$, while agent 2 learns nothing and sticks to his prior. They **permanently disagree**. 

