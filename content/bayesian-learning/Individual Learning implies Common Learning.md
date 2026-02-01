---
up: "[[Bayesian Learning]]"
aliases:
tags:
  - concept/proposition
  - bayes/learning
mathLink-blocks:
  ml-asm-learning-finite-signal-sets: $\textbf{Assumption }\text{(Finite Signal Sets). }|\mathcal{X}^{1}|,\ |\mathcal{X}^{2}|<\infty$
---
> [!proposition] Proposition 1 (Conditional Independence: Individual $\implies$ Common).
> Suppose that agents individually learn, and their signals are conditionally independent given the parameter. That is, there exist families $(P_{\theta}^{i})_{\theta \in\Theta}$, with each $P_{\theta}^{i}\in\Delta(\mathcal{X}^{i})$, such that $P_{\theta}(A \times B)=P_{\theta}^{1}(A)P_{\theta}^{2}(B)$ for each $\theta \in \Theta$ and measurable $A\subseteq \mathcal{X}^{1},\ B\subseteq \mathcal{X}^{2}$. Then, agents commonly learn.

^ml-prp-conditional-independence-individual-common

This proposition states: Suppose agents [[Individual Learning|individually learn]], and their signals are conditionally independent given the parameter, then agents [[Common Learning|commonly learn]]. See how [[Lemma. Common Learning Characterization via Evident q-Belief]] justifies the [[Proof of Crips et al. Conditional Independence]]. 

The requirement is that signals observed by the agents $(X^{1},X^{2})$ must be **conditionally independent** given the unknown parameter $\theta$. That is, $P_{\theta}(A \times B)= P_{\theta}(A)P_{\theta}(B)$ for measurable sets $A\subseteq \mathcal{X}^{1},\ B\subseteq \mathcal{X}^{2}$. The proposition holds regardless of whether the sets of signal realizations $(\mathcal{X}^{1},\mathcal{X}^{2})$ are _finite_ or _infinite_. It covers the case where agents have either _perfect correlation_ (public signals) or *no correlation* (independent signals) about the other agent's history. However, intermediate cases of correlation can [[#Intermediate Correlation breaks Proposition 1.|break this result]]. 

The following shows that, when the number of signal realizations are finite, then individual learning *always* implies common learning. 

>[!assumption] Assumption 1 (Finite Signal Sets).
>$|\mathcal{X}^{1}|,\ |\mathcal{X}^{2}|<\infty$

^ml-asm-learning-finite-signal-sets

> [!proposition] Proposition 2(Finite Signal Sets: Individual $\implies$ Common).
> If [[#^ml-asm-learning-finite-signal-sets]] is satisfied, then individual learning implies common learning. 

^70a4cf


> [!insight]
> Compared to Proposition $1$, Proposition $2$ does *not require conditional independence*. It addresses the "intermediate cases of correlation" where the signals are neither perfectly correlated nor conditionally independent. 
> 
> This result is necessary because intermediate correlation scenarios, coupled with infinite signal realizations, can break the link between individual learning and common learning. 



## Discussion 

### Intermediate Correlation breaks Proposition 1. 

In [[Rubinstein (1989)'s Email Game]], the results show that common learning fails whenever $0<\theta^{\prime}<\theta^{\prime\prime}<1$. Intuitively, when agent 1 sees the signal $k$, then he believes that, with some probability that can be uniformly lower bounded across histories, that agent 2 has also observed at least $k$. And if agent 2 observes $k$, then he believes with some probability that can be uniformly lower bounded that $1$ observed $k+1$. 

Since the number of signal realizations is infinite, there is unbounded contagion upwards: The agent always believes, with some probability, that the other agent believes with some probability that he has observed $\dots$ such a large signal that he believes the state is very likely to be $\theta^{\prime}$. Thus we cannot establish the [[Common p-Belief|common q-belief]] of $\theta^{\prime\prime}$ for large $q$. 