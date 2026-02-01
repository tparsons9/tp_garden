---
up: "[[Information Theory]]"
aliases:
  - signal
tags:
  - concept/definition
  - micro/information
related:
  - "[[Posterior Probability]]"
  - "[[Bayes' Plausible]]"
---
Given a set of parameters $(\Theta)$ endowed with a $\sigma$-algebra $\Sigma$, an agent has a [[Prior Probability|prior]] $p\in\Delta(\Theta)$, where $\Delta(\Theta)$ denotes the set of $\Sigma$-measurable probability measures on $\Theta$. 

An **information structure** defines how information about the state of the world is distributed among decision-makers. It includes the possible states, the **signals** a decision-maker can observe, and the probabilities of those signals, given each state. The study of information structures analyzes how this information affects economic decisions and outcomes in markets and strategic interactions. 

## Formalizations

>[!definition] Definition (Signal as a Mapping).
>The **signal** is a mapping $\sigma:\Theta\to\Delta(S)$ from the set of parameters to distributions over a set of signal realizations $S$. 

>[!definition] Definition (Signal as a Random Variable).
>The **signal** is a $(S,\mathcal{S})$-valued random variable $X$ on an underlying probability space $(\Omega,\Sigma,P)$, where $\Omega=\Theta \times E$ for some set $E$. 

Following the second formalism, we could, for example, define the signal to be $X=\theta+\varepsilon$ for an $E$-valued noise term $\varepsilon$ that is independent of $\theta$. 

>[!definition] Definition (Signal as a Finite Partition).
>The **signal** $S$ is a finite partition of $\Omega=\Theta \times [0,1]$, whose elements are non-empty and measurable with respect to the Lebesgue $\sigma$-algebra on $\Omega$. 
>
>Conditional on parameter $\theta$, the probability of observing $s \in S$ is the Lebesgue measure of $\{ x \in [0,1]\mid (\theta,x)\in s \}$

All three formalisms are different tools to build the [[Likelihood Function]] $P(X=x\mid \theta)$ part of [[Bayes' Theorem|Bayes' Rule]]. 

>[!remark]- Remark (Signal Formalisms Nest one-another when Sets are Finite).
>Suppose we are given a prior $p \in \Delta(\Theta)$ and a signal $\sigma:\Theta\to\Delta(S)$. Define the expanded state space to be $\Omega=\Theta \times S$ and let $P(\theta,s)=p(\theta)\sigma(s\mid \theta)$. Then the random variable $X:\Omega\to S$ satisfying $X(\theta,s)=s$ is equivalent to $\sigma$ in the sense that posterior beliefs about $\theta$ are the same whether we condition on the realization of $X$ or the realization of $\sigma(\theta)$.
>
>In the other direction, if we start with a random variable $X:\Theta \times E\to S$ and a distribution $P \in \Delta(\Theta \times E)$, then we can define $\sigma:\Theta\to\Delta(S)$ to satisfy $\sigma(s\mid\theta)=P(X^{-1}(s)\mid \theta)$.
>
>The formalism of the finite partition is a special case of the random variable formalism, where $E=[0,1],\ X:\Omega\to S$ maps each $\omega$ to the partition element in $S$ to which it belongs, and the probability Distribution $P$ is the Lebesgue Measure.

