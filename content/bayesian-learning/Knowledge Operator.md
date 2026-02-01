---
up: "[[Information Partitions and Knowledge]]"
aliases:
tags:
  - concept/definition
  - micro/information
---
>[!definition] Definition (Knowledge Operator).
>The set of states at which agent $i$ knows the event $A \subset \Omega$ to be **true** is:
>$$
>K_i(A) = \{ \omega : \Pi_i(\omega) \subseteq A \}
>$$
>Agent $i$ knows event $A$ at state $\omega$ if her information cell at $\omega$ is fully contained inside of $A$.


Agent $i$ knows event $A$ at state $\omega$ if all the states she considers possible at $\omega$ (i.e., all states in $\Pi_i(\omega)$) are actually in $A$. If all the states you think possible are in $A$, then you **must** know $A$.

## Properties
- **Necessitation**: $K_i(\Omega) = \Omega$ (everyone knows tautologies)
- **Distribution**: $K_i(A \cap B) = K_i(A) \cap K_i(B)$ (knowledge distributes over conjunction)
- **Positive Introspection**: $K_i(A) \subseteq K_i(K_i(A))$ (if you know, you know you know)
- **Negative Introspection**: $\neg K_i(\neg K_i(A)) = K_i(A)$ (if you don't know you don't know, then you know)
- **Truth**: $K_i(A) \subseteq A$ (knowledge implies truth)

>[!example] Basic Knowledge
>Suppose $\Omega = \{1,2,3,4,5,6\}$ and $\Pi_i = \{\{1,2,3\}, \{4,5\}, \{6\}\}$.
>For event $A = \{3,4,5,6\}$:
>- At $\omega = 4$: $\Pi_i(4) = \{4,5\} \subseteq A$, so $4 \in K_i(A)$
>- At $\omega = 6$: $\Pi_i(6) = \{6\} \subseteq A$, so $6 \in K_i(A)$
>- At $\omega = 1$: $\Pi_i(1) = \{1,2,3\} \not\subseteq A$, so $1 \notin K_i(A)$
>
>Therefore $K_i(A) = \{4,5,6\}$.

---
See also: [[Mutual Knowledge]], [[Common Knowledge]]