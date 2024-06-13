import { useContext, useEffect } from "react";
import { CarrinhoContext } from "@/context/CarrinhoContext";
import { useMemo } from "react";
import { ADD_PRODUTO, REMOVE_PRODUTO, UPDATE_QUANTIDADE } from "../reducers/carrinhoReducer";

const addProdutoAction  = (novoProduto) => ({
    type: ADD_PRODUTO,
    payload: novoProduto,
})

const removeProudutoAction = (produtoId) => ({
    type: REMOVE_PRODUTO,
    payload: produtoId,
})

const updateQuantidadeAction = (produtoId , quantidade) => ({
    type: UPDATE_QUANTIDADE,
    payload: {produtoId , quantidade},
})

export const useCarrinhoContext = () => {
    const {carrinho, dispatch, quantidade, valorTotal} = 
        useContext(CarrinhoContext);
  
    function adicionarProduto (novoProduto) {
        dispatch(addProdutoAction(novoProduto));
    }
 
     function removerProduto(id) {
        const produto = carinho.find((item) => item.id === id);

        if (produto && produto.quantidade > 1) {
          dispatch(updateQuantidadeAction(id, produto.quantidade - 1));
        }else{
          dispatch(removeProudutoAction(id));
        }
     }

     function removerProdutoCarrinho (id) {
      dispatch(removeProudutoAction(id));
     }  

   

return {
    carrinho,
    adicionarProduto,
    removerProduto,
    removerProdutoCarrinho,
    valorTotal,
    quantidade,
}

}