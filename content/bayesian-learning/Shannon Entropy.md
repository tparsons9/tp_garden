---
up: "[[Information Theory]]"
aliases:
  - entropy of uncertainty
tags:
  - micro/information
in:
  - "[[Courses]]"
  - "[[ECON 415-1]]"
share:
share_link: https://share.note.sx/bs7wlzlg#I7ZNqxGnIDgfsGmx7ceQYE8lMom+PmRTjRGnRXLXanY
share_updated: 2026-02-01T15:10:50-06:00
created: 2026-01-13 05:08:43
modified: 2026-02-01 15:11:50
---
**Shannon Entropy** is a measure that quantifies the average level of "information," "surprise," or "uncertainty" inherent in a random variable's possible outcomes. It is a **quantification of uncertainty** in a distribution. The higher the entropy of the distribution, the more information is contained in the realization of a random variable it governs.

The functional form of entropy is uniquely identified by [[Khinchin (1957) Axiomatization of Entropy]]. It is the leading model for [[Information Costs]] in "rational inattention" models. 
## Definitions

In the discrete case,

> [!definition] Def. 1. Shannon (1948)
> Let $\Theta=\{ \theta_{1},\dots,\theta_{n} \}$ for any $n<\infty$. The **entropy** of belief $p \in \Delta(\Theta)$ is
>
> $$
> H(p)=-\sum_{\theta\in \Theta} p(\theta)\ln(p(\theta)) = \mathbb{E}_{\theta \sim p}[-\ln(p(\theta))]
> $$
>
> where $0\ln0=0$. That is, entropy is defined as the expected value of the negative log-probability of an outcome.

Note that is also defined as a function of the random variable, rather than it's distribution, i.e.,

$$
H(\theta) = \mathbb{E}[-\ln(p(\theta))]
$$

In the continuous case,

> [!definition] Def. 2. Differential Entropy
> For a continuous random variable $\theta \in \Theta \subseteq \mathbb{R}$ with a [[Probability Density Function]] $p(\theta)$, the differential entropy is defined as
>
> $$
> H(p) = - \int_{\theta \in\Theta}p(\theta)\ln(p(\theta))\,d\theta
> $$

^b77af9

## Properties

1. **Maximal Value:** [[= Shannon entropy is maximized at the Uniform Distribution]] 
2. **Probability-zero states:** [[= Entropy is unchanged by probability-zero outcomes]]
3. **Continuity:** $H$ is continuous with respect to all of its arguments
4. **Chain Rule:** [[= Chain Rule for Entropy]] 
5. **Non-negativity:** [[= Non-negativity of Shannon Entropy]]
6. **Degenerate Distribution:** [[= Zero entropy at degenerate distributions]] at all degenerate distributions $p$. 
7. **Concavity:** [[Entropy is a concave function|entropy is concave]] 
8. **Relabeling of States:** [[= Entropy is invariant to a relabelling of states]] 
9. **Information reduces uncertainty:** [[(Entropy) Information Reduces Uncertainty]]

See [[Necessary and Sufficient Conditions for Shannon Entropy]] for a discussion on Properties $1-4$. 

---

## Discussion 

Entropy has a closely tied relationship with [[= Kullback-Leibler Divergence for Relative Entropy|KL-Divergence]], in that [[Entropy measures the KL-Divergence from the Uniform Distribution]]. The distribution $p$ has low entropy if it is further (as measured in a KL-sense) from the uniform distribution, and exhibits _high-entropy_ when it is close. In general, [[= Gibbs' Inequality|information entropy of a distribution is less than or equal to its cross entropy with any other distribution]]. 



