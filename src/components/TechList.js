import React, {Component} from 'react';

import TechItem from './TechItem';

class TechList extends Component{

    state = {
        newTech: '',
        techs: []
    };

    // Executado assim que o componente aparece em tela
    componentDidMount(){
        const techs = localStorage.getItem('techs');
        if(techs)
            this.setState({
                techs: JSON.parse(techs)
            })
    }

    //executado sempre que houver alteracoes nas props ou estado (prevProps, prevState)
    componentDidUpdate(_, prevState){
        if(prevState.techs !== this.state.techs){
            localStorage.setItem('techs',JSON.stringify(this.state.techs));
        }
    }

    //executado quando componente deixa de existir
    componentWillUnmount(){

    }

    handleInputChange = e =>{
        this.setState({newTech: e.target.value});
    }

    handleSubumit = e =>{
        e.preventDefault();
        this.setState({
            techs: [...this.state.techs, this.state.newTech],
            newTech: ''
        });
    }

    handleDelete = (tech) =>{
        this.setState({
            techs: this.state.techs.filter( t => t !== tech)
        })
    }

    render(){
        return(
            <>
                <form onSubmit={this.handleSubumit}>
                    <ul>
                        {this.state.techs.map(tech =>
                        <TechItem
                            key={tech}
                            tech={tech}
                            ondelete={ () =>this.handleDelete(tech)}
                        />
                        )}
                    </ul>
                    <input
                        type="text"
                        onChange={this.handleInputChange}
                        value={this.state.newTech}
                    />
                    <button type="submit">Enviar</button>
                </form>

            </>
        );
    }
}

export default TechList;
